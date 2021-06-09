import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetUpDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description}></meta>
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        description={props.meetupData.description}
        address={props.meetupData.address}
      ></MeetupDetail>
    </Fragment>
  );
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
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://meetup:meetup-admin@cluster0.fl5sw.mongodb.net/meetups?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  console.log(meetup);

  client.close();
  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        description: meetup.description,
        address: meetup.address,
        image: meetup.image,
      },
    },
    revalidate: 1,
  };
}
export default MeetUpDetailPage;
