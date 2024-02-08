"use server";
import { Resend } from "resend";

export async function sendEmail(subject, html) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "mualaapp@gmail.com",
    subject: subject,
    react: html,
  });
  if (error) {
    console.log(error);
    return error;
  }

  console.log(data);
}
