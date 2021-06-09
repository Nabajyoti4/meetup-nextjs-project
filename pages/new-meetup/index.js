import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const router = useRouter();

  const addMeetUpHandler = async (meetupData) => {
    console.log("api");
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add Meetup</title>
        <meta
          name="description"
          content="Add your new meetup to meet people"
        ></meta>
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler}></NewMeetUpForm>;
    </Fragment>
  );
}

export default NewMeetUpPage;
