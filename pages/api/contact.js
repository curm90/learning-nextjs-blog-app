import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message | (message.trim() === "")
    ) {
      return res.status(422).json({ message: "Invalid input" });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodbUsername}:${process.env.mongodbPassword}@${process.env.mongodbClusterName}.aokdwtf.mongodb.net/${process.env.mongodbKey}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      return res.status(500).json({ message: "Could not connect to database" });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Something went wrong" });
    }

    client.close();

    res.status(201).json({ message: "Message was sent successfully" });
  }
}
