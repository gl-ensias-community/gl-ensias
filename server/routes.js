const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mail = require("./actions/mail");
require("dotenv/config");
import { sendMessage } from "./actions/contact";
import { getMessages } from "./actions/contact";

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.post("/api/v1/sendemails", async (req, res) => {
    const contactData = req.body;
    name = contactData.name;
    to = contactData.email;
    message = contactData.message;
    const sendMail = await mail.sendContactEmail({ name, to, message });
    if (sendMail) {
      res.status(200).json({ message: "Mail sent successfully" });
    } else {
      res.status(400).json({ message: "Error" });
    }
  
    res.end();
  });

app.get("/api/v1/contactlist", async (req, res) => {
  try {
    const messages = await getMessages();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "An error has occurred", error });
  }
  });

  app.post("/api/v1/sendcontactmessage", async (req, res) => {
    const contactData = req.body;

  try {
    const sendContactMessage = await sendMessage(contactData);
    if (sendContactMessage) {
      res.status(200).json({ message: "Message sent successfully" });
    } else {
      res.status(400).json({ message: "Error sending message" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
  });