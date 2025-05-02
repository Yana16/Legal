const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const TOKEN = "7512707584:AAEakut_6eFY7ociHG03xpZy7uDPVCZYxaw";
const CHAT_ID = "-4633396044";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

app.post("/", async (req, res) => {
  const user = req.body;
  let message = `<b>Заявка з сайту</b>\n`;
  message += `<b>І'мя: </b> ${user.name}\n`;
  message += `<b>Пошта: </b> ${user.email}\n`;
  message += `<b>Телефон: </b> ${user.telephone}\n`;
  message += `<b>Коментар: </b> ${user.comment}\n`;
  try {
    await axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });
    res.status(200).send("Message sent successfully");
  } catch (e) {
    res.status(500).send("Error sending message");
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
