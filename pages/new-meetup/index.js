import React from "react";

import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const addMeetUpHandler = (meetupData) => {
    console.log(meetupData);
  };

  return <NewMeetUpForm onAddMeetup={addMeetUpHandler}></NewMeetUpForm>;
}

export default NewMeetUpPage;
