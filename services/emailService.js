import nodemailer from "nodemailer";

export const sendBookingEmail = async (booking) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Date formatting (DD-MM-YYYY if valid)
  const formattedDate = booking.date ? new Date(booking.date).toLocaleDateString('en-IN') : booking.date;

  await transporter.sendMail({
    from: `"Astro World 🔮" <${process.env.EMAIL_USER}>`,
    to: booking.email,
    subject: "✨ Booking Confirmed | Your Cosmic Consultation at Astro World",

    html: `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #0c041c; padding: 40px 20px; color: #ffffff;">
      
      <div style="max-width: 550px; margin: 0 auto; background-color: #120924; border: 1px solid rgba(255, 215, 0, 0.2); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
        
        <div style="background: linear-gradient(135deg, #2b1055, #100521); padding: 30px; text-align: center; border-bottom: 1px solid rgba(255, 215, 0, 0.15);">
          <h1 style="color: #ffd700; margin: 0; font-size: 26px; letter-spacing: 2px; font-weight: bold; text-shadow: 0 2px 10px rgba(255,215,0,0.3);">ASTRO WORLD</h1>
          <p style="color: #b3a1d9; margin: 5px 0 0 0; font-size: 14px; letter-spacing: 1px;">Where the Stars Align for You</p>
        </div>

        <div style="padding: 35px 30px; line-height: 1.6;">
          
          <h2 style="color: #ffffff; font-size: 20px; margin-top: 0; font-weight: 500;">Hello ${booking.name},</h2>
          
          <p style="color: #d1c4e9; font-size: 15px;">Your session is officially locked in with our Vedic experts. The universe is ready to unfold its secrets for you!</p>

          <div style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #ffd700; margin-top: 0; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">📅 Session Details</h3>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 8px 0; color: #a291c7; width: 110px; font-weight: 500;">Date</td>
                <td style="padding: 8px 0; color: #ffffff;">: &nbsp;${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a291c7; font-weight: 500;">Time Slot</td>
                <td style="padding: 8px 0; color: #ffffff;">: &nbsp;${booking.time}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a291c7; font-weight: 500;">Phone Verified</td>
                <td style="padding: 8px 0; color: #ffffff;">: &nbsp;${booking.phone}</td>
              </tr>
            </table>
          </div>

          <h4 style="color: #ffd700; font-size: 15px; margin-bottom: 10px;">📌 Important Guidelines:</h4>
          <ul style="color: #c4b5e6; font-size: 14px; padding-left: 20px; margin-bottom: 30px;">
            <li style="margin-bottom: 8px;">Please ensure you are in a quiet room at the scheduled time.</li>
            <li style="margin-bottom: 8px;">Keep your Birth Date, Birth Time, and Place of Birth ready.</li>
            <li>Our expert will call you directly on your registered mobile number.</li>
          </ul>

          <p style="color: #ffffff; font-size: 15px; margin-top: 30px; font-weight: 500;">Warm regards,<br>Team Astro World</p>
        </div>

        <div style="background-color: #0b0517; padding: 25px 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05);">
          <p style="color: #a291c7; font-size: 14px; margin: 0 0 10px 0;">Need to reschedule or have a query?</p>
          <a href="mailto:${process.env.EMAIL_USER}" style="display: inline-block; text-decoration: none; color: #120924; background: #ffd700; padding: 10px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);">Contact Support</a>
          
          <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.05); margin: 25px 0;" />
          
          <p style="font-size: 12px; color: #7a6e8a; margin: 0; letter-spacing: 0.5px;">
            Astro World AI & Vedic Astrology Services<br>
            भविष्य की सटीक और वैज्ञानिक दिशा
          </p>
        </div>

      </div>

    </div>
    `
  });

};