"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const replyTo = formData.get("replyTo");
  const message = formData.get("message");

  if (typeof replyTo !== "string" || replyTo.length > 100) {
    return { error: "Invalid sender email" };
  }
  if (typeof message !== "string" || message.length > 5000) {
    return { error: "Invalid message" };
  }

  try {
    resend.emails.send({
      from: "Contact From Portfolio <onboarding@resend.dev>",
      to: "mihavintar3@gmail.com",
      reply_to: replyTo,
      subject: "Message from portfolio",
      text: message,
    });

    return { success: "Message sent" };
  } catch (error: any) {
    console.log(error);
    return { error: error?.message ? error.message : "Unknown error occurred" };
  }
}
