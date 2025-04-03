import { NextApiRequest, NextApiResponse } from "next";

const TOKEN = process.env.MAILTRAP_TOKEN || "2f2a629877ef4a48fc292cf8ed95573c";
const TEMPLATE_UUID = "cc27c2b1-3bea-4317-ae36-f897a36c15b9"; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, goal, date, email, message } = req.body;

  if (!name || !goal || !date || !email || !message) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const response = await fetch("https://send.api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: {
          email: "hello@demomailtrap.co",
          name: "Portfolio Inquiry",
        },
        to: [{ email: "krishnarastogi67@gmail.com" }],
        template_uuid: TEMPLATE_UUID, 
        template_variables: {
          name: name,
          goal: goal,
          date: date,
          email: email,
          message: message,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Mailtrap API Error: ${errorText}`);
    }

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("❌ Mailtrap Error:", error.message);
    return res.status(500).json({ message: "Failed to send email." });
  }
}
