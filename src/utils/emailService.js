import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_geb0kt9';
const TEMPLATE_LAFU = import.meta.env.VITE_EMAILJS_TEMPLATE_LAFU || 'template_pv5lm74';
const TEMPLATE_PATIENT = import.meta.env.VITE_EMAILJS_TEMPLATE_PATIENT || 'template_xly1eog';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'X4qYCQD3XhvLYRiog';

export const sendAppointmentEmails = async ({ name, phone, email, treatment, date, time, message }) => {
  const formattedDate = date ? `${date}${time ? ' at ' + time : ''}` : (time ? `Time: ${time}` : 'Flexible / Preferred slot pending');
  const targetEmail = (email && email.trim() !== '') ? email.trim() : 'lafusecosmetologyclinic@gmail.com';

  const baseParams = {
    from_name: name,
    to_name: 'La Fuse Cosmetology Clinic',
    from_email: targetEmail,
    to_email: targetEmail,
    email: targetEmail,
    user_email: targetEmail,
    phone_number: phone,
    phone: phone,
    treatment: treatment || 'Cosmetology Consultation',
    appointment_date: formattedDate,
    appointment_time: time || 'Not selected',
    message: message || 'Appointment booking request via website',
    reply_to: targetEmail,
  };

  const lafuParams = {
    ...baseParams,
    to_email: 'lafusecosmetologyclinic@gmail.com',
    email: 'lafusecosmetologyclinic@gmail.com',
    user_email: 'lafusecosmetologyclinic@gmail.com',
  };

  const patientParams = {
    ...baseParams,
    to_email: targetEmail,
    email: targetEmail,
    user_email: targetEmail,
  };

  let lafuSuccess = false;
  let patientSuccess = false;

  // 1. Send alert email to La Fuse Clinic
  try {
    const resLafu = await emailjs.send(SERVICE_ID, TEMPLATE_LAFU, lafuParams, PUBLIC_KEY);
    console.log('Lafu Email Sent Successfully:', resLafu);
    lafuSuccess = true;
  } catch (err) {
    console.error('Lafu Email (template_pv5lm74) Error:', err);
  }

  // 2. Send confirmation email to Patient
  try {
    const resPatient = await emailjs.send(SERVICE_ID, TEMPLATE_PATIENT, patientParams, PUBLIC_KEY);
    console.log('Patient Email Sent Successfully:', resPatient);
    patientSuccess = true;
  } catch (err) {
    console.error('Patient Email (template_xly1eog) Error:', err);
  }

  return { success: lafuSuccess || patientSuccess };
};
