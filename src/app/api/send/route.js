// api/send/route.js
import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { nombre, apellidos, email, celular, ciudad, servicio, mensaje } = await request.json();

  const emailData = {
    firstName: nombre,
    lastName: apellidos,
    email,
    phone: celular,
    city: ciudad,
    service: servicio,
    message: mensaje || 'No se proporcionó mensaje adicional'
  };

  try {
    const { data, error } = await resend.emails.send({
      from: "RZ Makeup Artist <onboarding@resend.dev>",
      to: ["rzmakeup626@gmail.com"],
      subject: "¡Gracias por tu interés en RZ Makeup Artist! 🌟",
      react: EmailTemplate(emailData)
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}