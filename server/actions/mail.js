const nodemailer = require("nodemailer");
require("dotenv/config");

const email = process.env.GL_EMAIL;
const password = process.env.GL_PASSWORD;
const year = new Date().getFullYear();

const transport = nodemailer.createTransport({
  port: 587,
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: email,
    pass: password,
  },
  secure: true,
});

const sendContactEmail = async ({ name, to, message }) => {
  const html = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div
        style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #252830;
          color: #ffffff;
          border-radius: 8px;
        "
      >
        <div style="text-align: left">
          <img
            src="https://glensias.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=256&q=75"
            alt="GL ENSIAS"
            style="width: 100px"
          />
        </div>
        <hr style="border: 1px solid rgba(255, 255, 255, 0.1)" />
        <p>Hi ${name},</p>
        <br />
        <p>
          Thanks for contacting us! Your message has been received, and we will
          get back to you as soon as possible.
        </p>
        <br />
        <p>Best regards,</p>
        <p>GL ENSIAS Team</p>
        <br />
        <hr style="border: 1px solid rgba(255, 255, 255, 0.1)" />
        <p style="text-align: center; font-size: 12px">
          Follow us on social media
        </p>
        <div style="text-align: center">
          <a
            target="_blank"
            href="https://web.facebook.com/profile.php?id=61563803917528"
            style="text-decoration: none"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/EE372F/facebook.png"
              alt="facebook"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/gl_ensias/"
            style="text-decoration: none"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/EE372F/instagram.png"
              alt="instagram"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/gl-ensias"
            style="text-decoration: none"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/EE372F/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a
            target="_blank"
            href="https://x.com/gl_ensias"
            style="text-decoration: none"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/EE372F/twitterx.png"
              alt="twitter"
            />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@gl_ensias"
            style="text-decoration: none"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/EE372F/tiktok.png"
              alt="tiktok"
            />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@gl_ensias"
            style="text-decoration: none"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/EE372F/youtube.png"
              alt="youtube"
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/organizations/gl-ensias-community/"
            style="text-decoration: none"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/EE372F/github.png"
              alt="github"
            />
          </a>
        </div>
        <p style="text-align: center; font-size: 12px">
          © ${year} GL ENSIAS Team. All rights reserved.
        </p>
      </div>
    </body>
  </html>
  `;

  const mailOptionsToOwner = {
    to: email,
    subject: `Contact Form Submission from ${name} <${to}>`,
    text: message,
  };

  const mailOptionsToUser = {
    from: email,
    to: to,
    subject: "Thanks for contacting The GL ENSIAS Team!",
    html: html,
  };

  return Promise.all([
    transport.sendMail(mailOptionsToOwner),
    transport.sendMail(mailOptionsToUser),
  ]);
};

module.exports = { sendContactEmail };