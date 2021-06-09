import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetUpDetailPage(props) {
  return <MeetupDetail meetup={props.meetup}></MeetupDetail>;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
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
