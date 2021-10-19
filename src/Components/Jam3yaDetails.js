import React from "react";
import { Redirect, useParams } from "react-router-dom";
import jam3yaStore from "../Stores/Jam3yaStore";
import Moment from "react-moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";

function Jam3yaDetails() {
  const slug = useParams().listSlug;

  const jam3ya = jam3yaStore.jam3yas.find((jam3ya) => jam3ya.slug === slug);

  const handleDelete = () => {
    console.log(jam3ya);
    jam3yaStore.deleteJam3ya(jam3ya._id);
  };

  if (!jam3ya) return <Redirect to="/jam3ya-list" />;
  return (
    <div className="detail container">
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
              {" "}
              Current Members: {jam3ya.users.length} / {jam3ya.limit}
            </p>
            <p>
              Start Date:{" "}
              <Moment format="DD/MM/YYYY">{jam3ya.startDate}</Moment>
            </p>
            <p>
              End Date: <Moment format="DD/MM/YYYY">{jam3ya.endDate}</Moment>
            </p>
          </div>
          <br />
          <div>
            <Button
              variant="outline-info "
              onClick={() => jam3yaStore.addUser(jam3ya._id)}
            >
              {" "}
              Join Jam3ya{" "}
            </Button>
            <br />
            <Button variant="outline-success"> Update Jam3ya </Button>
            <Button variant="outline-danger" onClick={handleDelete}>
              {" "}
              Delete Jam3ya{" "}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default observer(Jam3yaDetails);
