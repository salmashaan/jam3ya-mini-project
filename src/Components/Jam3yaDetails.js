import React from "react";
import { Redirect, useParams } from "react-router-dom";
import jam3yaStore from "../Stores/Jam3yaStore";
import Moment from "react-moment";

function Jam3yaDetails() {
  const slug = useParams().listSlug;

  const jam3ya = jam3yaStore.jam3yas.find((jam3ya) => jam3ya.slug === slug);

  if (!jam3ya) return <Redirect to="/" />;
  return (
    <div className="detail">
      {jam3ya && ( // if there is jam3ya show its data
        <>
          <br />
          <h5>{jam3ya.title}</h5>
          <br />
          <img src={jam3ya.image} alt="jam3ya" />
          <br />
          <br />
          <div className="row justify-content-center align-self-center col-5">
            <p>Amount: {jam3ya.amount} KD</p>
            <p>Member Limit: {jam3ya.limit}</p>
            <p>
              Start Date:{" "}
              <Moment format="DD/MM/YYYY">{jam3ya.startDate}</Moment>
            </p>
            <p>
              End Date: <Moment format="DD/MM/YYYY">{jam3ya.endDate}</Moment>
            </p>
          </div>
          <br />
        </>
      )}
    </div>
  );
}

export default Jam3yaDetails;
