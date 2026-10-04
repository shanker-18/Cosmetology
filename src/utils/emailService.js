import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_geb0kt9';
const TEMPLATE_LAFU = import.meta.env.VITE_EMAILJS_TEMPLATE_LAFU || 'template_pv5lm74';
const TEMPLATE_PATIENT = import.meta.env.VITE_EMAILJS_TEMPLATE_PATIENT || 'template_xly1eog';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'X4qYCQD3XhvLYRiog';

const CLINIC_EMAIL = 'lafusecosmetologyclinic@gmail.com';
let lastSendTimestamp = 0;

export const sendAppointmentEmails = async ({ name, phone, email, treatment, date, time, message, cancelUrl }) => {
  // Prevent double sending within 2 seconds
  const now = Date.now();
  if (now - lastSendTimestamp < 2000) {
    console.warn('Duplicate send attempt prevented');
    return { success: true };
  }
  lastSendTimestamp = now;

  const cleanEmail = (email && email.trim() !== '') ? email.trim() : '';
  const isSameAsClinic = cleanEmail.toLowerCase() === CLINIC_EMAIL.toLowerCase();
  const validCancelUrl = cancelUrl || window.location.origin;

  const cancelButtonHtml = `<div style="text-align:center; margin-top:20px;"><a href="${validCancelUrl}" style="background-color:#E53E3E; color:#ffffff; padding:12px 22px; border-radius:6px; text-decoration:none; font-weight:bold; display:inline-block;">❌ Cancel Appointment</a></div>`;

  const lafuParams = {
    email_subject: `New Confirmed Appointment - ${name}`,
    status_message: `A new appointment has been CONFIRMED for ${name} on ${date || ''} at ${time || ''} for ${treatment || 'Cosmetology Consultation'}.`,
    email_intro_message: `A new appointment has been CONFIRMED through the La Fuse website.`,
    patient_name: name,
    patient_email: cleanEmail || 'no-email@provided.com',
    patient_phone: phone,
    appointment_date: date || 'Flexible / Pending',
    appointment_time: time || 'Flexible / Pending',
    treatment: treatment || 'Cosmetology Consultation',
    message: message || 'Appointment booked via website',
    cancel_url: validCancelUrl,
    cancel_button_html: cancelButtonHtml,
    name: name,
    email: cleanEmail || CLINIC_EMAIL,
    phone: phone,
    to_email: CLINIC_EMAIL,
    reply_to: cleanEmail || CLINIC_EMAIL,
  };

  let lafuSuccess = false;
  let patientSuccess = false;

  // 1. Send alert email to La Fuse Clinic
  try {
    const resLafu = await emailjs.send(SERVICE_ID, TEMPLATE_LAFU, lafuParams, PUBLIC_KEY);
    console.log('Lafu Clinic Email Sent:', resLafu);
    lafuSuccess = true;
  } catch (err) {
    console.error('Lafu Email (template_pv5lm74) Error:', err);
  }

  // 2. Send confirmation email to Patient (only if patient email is provided and DIFFERENT from clinic email)
  if (cleanEmail !== '' && !isSameAsClinic) {
    const patientParams = {
      ...lafuParams,
      email_subject: `Appointment Confirmed - La Fuse Cosmetology Clinic`,
      status_message: `Your appointment is CONFIRMED for ${date || ''} at ${time || ''} for ${treatment || 'Cosmetology Consultation'}. We look forward to welcoming you at La Fuse Cosmetology Clinic.`,
      email_intro_message: `Your appointment is CONFIRMED! We look forward to welcoming you at La Fuse Cosmetology Clinic.`,
      to_name: name,
      to_email: cleanEmail,
      reply_to: CLINIC_EMAIL,
    };

    try {
      const resPatient = await emailjs.send(SERVICE_ID, TEMPLATE_PATIENT, patientParams, PUBLIC_KEY);
      console.log('Patient Email Sent:', resPatient);
      patientSuccess = true;
    } catch (err) {
      console.error('Patient Email (template_xly1eog) Error:', err);
    }
  }

  return { success: lafuSuccess || patientSuccess };
};

export const sendCancellationEmails = async ({ name, email, phone, treatment, date, time }) => {
  // Prevent double sending within 2 seconds
  const now = Date.now();
  if (now - lastSendTimestamp < 2000) {
    console.warn('Duplicate cancellation email attempt prevented');
    return { success: true };
  }
  lastSendTimestamp = now;

  const cleanEmail = (email && email.trim() !== '') ? email.trim() : '';
  const isSameAsClinic = cleanEmail.toLowerCase() === CLINIC_EMAIL.toLowerCase();

  const cancelNoticeParams = {
    email_subject: `❌ CANCELLED: Appointment for ${name}`,
    status_message: `❌ CANCELLED: The appointment for ${name} on ${date || ''} at ${time || ''} has been CANCELLED and the time slot is now unblocked.`,
    email_intro_message: `❌ Your appointment for ${treatment || 'Cosmetology Consultation'} on ${date || ''} at ${time || ''} has been CANCELLED.`,
    patient_name: name,
    patient_email: cleanEmail || 'no-email@provided.com',
    patient_phone: phone || 'N/A',
    appointment_date: date || 'N/A',
    appointment_time: time || 'N/A',
    treatment: treatment || 'Cosmetology Consultation',
    message: `❌ APPOINTMENT CANCELLED. Time slot ${time || ''} is unblocked and available.`,
    cancel_url: '',
    cancel_button_html: '', // Empty button so no cancel button renders on cancellation emails!
    name: name,
    email: cleanEmail || CLINIC_EMAIL,
    phone: phone,
    to_email: CLINIC_EMAIL,
    reply_to: CLINIC_EMAIL,
  };

  try {
    // 1. Send cancellation notice to Clinic
    await emailjs.send(SERVICE_ID, TEMPLATE_LAFU, cancelNoticeParams, PUBLIC_KEY);

    // 2. Send cancellation notice to Patient (if different from clinic email)
    if (cleanEmail !== '' && !isSameAsClinic) {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_PATIENT,
        {
          ...cancelNoticeParams,
          email_subject: `❌ Cancellation Notice: Appointment on ${date || ''}`,
          to_email: cleanEmail,
          to_name: name,
        },
        PUBLIC_KEY
      );
    }
    return { success: true };
  } catch (err) {
    console.error('Cancellation email notification error:', err);
    return { success: false, err };
  }
};
