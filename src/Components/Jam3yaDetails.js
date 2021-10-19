import React from "react";
import { Redirect, useParams } from "react-router-dom";
import jam3yaStore from "../Stores/Jam3yaStore";
import Moment from "react-moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import { now } from "moment";
import UpdateJam3yaModal from "./UpdateJam3yaModal";
import { useState } from "react";

function Jam3yaDetails(props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const slug = useParams().jam3yaSlug;

  const jam3ya = jam3yaStore.jam3yas.find((jam3ya) => jam3ya.slug === slug);

  const handleDelete = () => {
    jam3yaStore.deleteJam3ya(jam3ya._id);
  };

  // if (!jam3ya) return <Redirect to="/jam3ya-list/:listSlug" />;

  return (
    <div className="detailBackground">
      <div className="detail container card p-2 m-3 col-lg-7 col-sm-12 detailWrapper">
        {jam3ya && ( // if there is jam3ya show its data
          <>
            <br />
            <h5>{jam3ya.title}</h5>
            <br />
            <img className="card-image-top " src={jam3ya.image} alt="jam3ya" />
            <br />
            <br />
            <div className="row justify-content-center align-self-center col-5">
              <p>Amount: {jam3ya.amount} KD</p>
              <p>Member Limit: {jam3ya.limit}</p>
              <p>
                Current Members: {jam3ya.users.length} / {jam3ya.limit}
              </p>

              <p>
                Start Date:
                <Moment format="DD/MM/YYYY">{jam3ya.startDate}</Moment>
              </p>
              <p>
                End Date: <Moment format="DD/MM/YYYY">{jam3ya.endDate}</Moment>
              </p>
            </div>
            <br />
            <p className="buttons">
              {jam3ya.limit > jam3ya.users.length &&
              new Date(jam3ya.startDate) > new Date() ? (
                <Button
                  variant="primary "
                  onClick={() => jam3yaStore.addUser(jam3ya._id)}
                >
                  Join Jam3ya
                </Button>
              ) : (
                <p></p>
              )}

              {new Date(jam3ya.startDate) > new Date() ? (
                <Button
                  variant="primary "
                  onClick={() => jam3yaStore.leave(jam3ya._id)}
                >
                  Leave Jam3ya
                </Button>
              ) : (
                <p></p>
              )}

              <Button variant="primary" onClick={openModal}>
                Update Jam3ya
              </Button>

              <UpdateJam3yaModal
                isOpen={isOpen}
                closeModal={closeModal}
                jam3ya={jam3ya}
              />
            </p>
            <p className="buttons">
              <Button variant="outline-danger" onClick={handleDelete}>
                Delete Jam3ya
              </Button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default observer(Jam3yaDetails);
