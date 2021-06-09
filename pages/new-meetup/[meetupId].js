import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";

function MeetUpDetailPage(props) {
  return <MeetupDetail meetup={props.meetup}></MeetupDetail>;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://meetup:meetup-admin@cluster0.fl5sw.mongodb.net/meetups?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetup: {
        id: meetupId,
        title: "A first meetup",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3oHkiYs4q99R3jbur1cNe0oWW4Tz-BrfEw&usqp=CAU",
        address: "France , New york city",
        description: "Description of meetup",
      },
    },
    revalidate: 1,
  };
}
export default MeetUpDetailPage;
