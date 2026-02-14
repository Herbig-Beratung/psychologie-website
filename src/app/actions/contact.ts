"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormState {
  success: boolean;
  error: string | null;
}

export async function sendContactEmail(
  formData: FormData
): Promise<ContactFormState> {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "Nicht angegeben";
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const privacy = formData.get("privacy");

  // Validate required fields
  if (!firstName || !lastName || !email || !subject || !message || !privacy) {
    return {
      success: false,
      error: "Bitte füllen Sie alle Pflichtfelder aus.",
    };
  }

  // Map subject values to readable labels
  const subjectLabels: Record<string, string> = {
    mpu: "MPU Beratung",
    mentalhealth: "Mentale Gesundheit & Leistungsfähigkeit",
    unternehmen: "Psychologie in Unternehmen",
    "workshop-resilienz-stressbewaeltigung":
      "Workshop: Resilienz & Stressbewältigung",
    "workshop-mentale-leistungsfaehigkeit":
      "Workshop: Mentale Leistungsfähigkeit",
    "workshop-emotionale-intelligenz":
      "Workshop: Emotionale Intelligenz & Beziehungsdynamiken",
    "workshop-selbstwert-identitaet": "Workshop: Selbstwert & Identität",
    "workshop-gesunde-fuehrung": "Workshop: Gesunde Führung",
    "workshop-resilienz-mitarbeitende":
      "Workshop: Resilienz & Stressmanagement für Mitarbeitende",
    "workshop-change-resilienz":
      "Workshop: Change & Resilienz für Organisationen",
    "workshop-mentale-gesundheit-praevention":
      "Workshop: Mentale Gesundheit & Prävention",
    erstgespraech: "Allgemeines Erstgespräch",
    sonstiges: "Sonstiges",
  };

  const subjectLabel = subjectLabels[subject] || subject;

  try {
    await resend.emails.send({
      from: "Kontaktformular <kontakt@herbig-beratung.de>",
      to: "kontakt@herbig-beratung.de",
      replyTo: email,
      subject: `Neue Anfrage: ${subjectLabel}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2a2e1f; border-bottom: 2px solid #c8956c; padding-bottom: 12px;">
            Neue Kontaktanfrage
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Name</td>
              <td style="padding: 8px 12px;">${firstName} ${lastName}</td>
            </tr>
            <tr style="background: #f9f9f6;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">E-Mail</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Telefon</td>
              <td style="padding: 8px 12px;">${phone}</td>
            </tr>
            <tr style="background: #f9f9f6;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Betreff</td>
              <td style="padding: 8px 12px;">${subjectLabel}</td>
            </tr>
          </table>

          <div style="background: #f9f9f6; border-left: 4px solid #c8956c; padding: 16px 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
            <p style="font-weight: bold; color: #555; margin: 0 0 8px 0;">Nachricht:</p>
            <p style="color: #333; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            Diese Nachricht wurde über das Kontaktformular auf herbig-beratung.de gesendet.
          </p>
        </div>
      `,
    });

    return { success: true, error: null };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error:
        "Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt per E-Mail.",
    };
  }
}
