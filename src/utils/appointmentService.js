import { supabase } from './supabaseClient';
import { sendAppointmentEmails, sendCancellationEmails } from './emailService';

// Fetch all booked time slots for a specific date from Supabase
export const fetchBookedSlots = async (selectedDate) => {
  if (!selectedDate) return [];

  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('appointment_time')
      .eq('appointment_date', selectedDate)
      .neq('status', 'cancelled');

    if (error) {
      console.warn('Supabase fetchBookedSlots warning/error:', error.message);
      return [];
    }

    if (data && Array.isArray(data)) {
      return data.map((item) => item.appointment_time).filter(Boolean);
    }
    return [];
  } catch (err) {
    console.error('Error fetching booked slots:', err);
    return [];
  }
};

// Save appointment to Supabase AND trigger EmailJS notifications with unique cancellation URL
export const saveAppointmentAndNotify = async ({ name, phone, email, treatment, date, time, message }) => {
  let dbSuccess = false;
  let appointmentId = null;

  try {
    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          name,
          phone,
          email,
          treatment,
          appointment_date: date,
          appointment_time: time,
          message: message || '',
          status: 'confirmed',
        },
      ])
      .select('id');

    if (error) {
      console.warn('Supabase Insert Note:', error.message);
    } else if (data && data.length > 0) {
      dbSuccess = true;
      appointmentId = data[0].id;
      console.log('Appointment saved to Supabase with ID:', appointmentId);
    }
  } catch (err) {
    console.error('Supabase Exception:', err);
  }

  // Construct cancellation link using appointment ID
  const cancelUrl = appointmentId
    ? `${window.location.origin}/?action=cancel&id=${appointmentId}`
    : `${window.location.origin}/?action=cancel`;

  // Trigger EmailJS notifications
  const emailResult = await sendAppointmentEmails({
    name,
    phone,
    email,
    treatment,
    date,
    time,
    message,
    cancelUrl,
  });

  return {
    success: true,
    appointmentId,
    cancelUrl,
    dbSuccess,
    emailSuccess: emailResult.success,
  };
};

// Cancel an appointment by ID from Supabase and notify both clinic & patient
export const cancelAppointmentById = async (id) => {
  if (!id) return { success: false, error: 'No appointment ID provided' };

  try {
    // 1. Fetch appointment details first
    const { data, error: fetchErr } = await supabase
      .from('appointments')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchErr || !data) {
      console.error('Appointment not found for cancellation:', fetchErr);
      return { success: false, error: 'Appointment record not found or already cancelled.' };
    }

    // 2. Delete or update status to 'cancelled' in Supabase
    const { error: deleteErr } = await supabase
      .from('appointments')
      .delete()
      .eq('id', id);

    if (deleteErr) {
      console.error('Error deleting appointment from Supabase:', deleteErr);
      // Fallback: update status to cancelled
      await supabase.from('appointments').update({ status: 'cancelled' }).eq('id', id);
    }

    // 3. Send cancellation notice emails to clinic & patient
    await sendCancellationEmails({
      name: data.name,
      email: data.email,
      phone: data.phone,
      treatment: data.treatment,
      date: data.appointment_date,
      time: data.appointment_time,
    });

    return {
      success: true,
      appointment: data,
    };
  } catch (err) {
    console.error('Cancel appointment error:', err);
    return { success: false, error: err.message };
  }
};
