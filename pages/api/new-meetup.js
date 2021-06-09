import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://meetup:meetup-admin@cluster0.fl5sw.mongodb.net/meetups?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
      );

      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({
        message: "Added Meetup",
      });
    } catch (err) {
      client.close();

      res.status(400).json({
        error: "failed",
      });
    }
    }
    
    

};

export default handler;
