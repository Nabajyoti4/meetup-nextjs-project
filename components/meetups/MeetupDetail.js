import React from "react";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const { title, image, description, address } = props.meetup;
  return (
    <section className={classes.detail}>
      <img src={image} alt={title}></img>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
