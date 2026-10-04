import { supabase } from './supabaseClient';
import { sendAppointmentEmails } from './emailService';

// Fetch all booked time slots for a specific date from Supabase
export const fetchBookedSlots = async (selectedDate) => {
  if (!selectedDate) return [];

  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('appointment_time')
      .eq('appointment_date', selectedDate);

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

// Save appointment to Supabase AND trigger EmailJS notifications
export const saveAppointmentAndNotify = async ({ name, phone, email, treatment, date, time, message }) => {
  let dbSuccess = false;

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
      ]);

    if (error) {
      console.warn('Supabase Insert Note:', error.message);
    } else {
      dbSuccess = true;
      console.log('Appointment saved to Supabase successfully!');
    }
  } catch (err) {
    console.error('Supabase Exception:', err);
  }

  // Trigger EmailJS notifications
  const emailResult = await sendAppointmentEmails({
    name,
    phone,
    email,
    treatment,
    date,
    time,
    message,
  });

  return {
    success: true,
    dbSuccess,
    emailSuccess: emailResult.success,
  };
};
