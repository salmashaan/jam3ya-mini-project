import React from "react";
import { Redirect, useParams } from "react-router-dom";
import jam3yaStore from "../Stores/Jam3yaStore";

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
          <div className="row justify-content-center">
            <p className="align-self-center col-5">{jam3ya.amount}</p>
            <p className="align-self-center col-5">{jam3ya.limit}</p>
            <p className="align-self-center col-5">{jam3ya.startDate}</p>
            <p className="align-self-center col-5">{jam3ya.endDate}</p>
          </div>
          <br />
        </>
      )}
    </div>
  );
}

export default Jam3yaDetails;