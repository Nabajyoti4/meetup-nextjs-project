import React from "react";
import { useRouter } from "next/router";

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

  return <NewMeetUpForm onAddMeetup={addMeetUpHandler}></NewMeetUpForm>;
}

export default NewMeetUpPage;
