import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      phone,
      date,
      duration,
      selectedPlan,
      selectedSpecial,
      shootType,
      amenities,
      otherShootType,
      otherRequests,
    } = data;

    const selected = selectedPlan || selectedSpecial;

    // Compose email content
    const emailContent = `
      <h2>New Studio Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Selected Plan / Special:</strong> ${selected}</p>
       <p><strong>Shoot Type:</strong> ${shootType === "other" ? otherShootType || "None" : shootType}</p>

      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Duration:</strong> ${duration} hr(s)</p>
      <p><strong>Amenities:</strong> ${
        amenities?.length ? amenities.join(", ") : "None"
      }</p>
       <p><strong>Any Other Requests:</strong> ${otherRequests || "None"}</p>
    `;

    // Send email
    // filmestudiogurgaon@gmail.com
    await resend.emails.send({
      from: "noreply@filmestudio.com", // must be verified in Resend
      to: "filmestudiogurgaon@gmail.com", // email where you want to receive booking info
      subject: `New Studio Booking: ${selected}`,
      html: emailContent,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
    });
  }
}
