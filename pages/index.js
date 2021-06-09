import React from "react";

//components

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3oHkiYs4q99R3jbur1cNe0oWW4Tz-BrfEw&usqp=CAU",
    address: "France , New york city",
    description: "Description of meetup",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMA-94zaeYdOcRltZWX0bFhv9upIPq7dvXlw&usqp=CAU",
    address: "Japan , tokyu onikawa",
    description: "Description of meetup",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export default HomePage;
