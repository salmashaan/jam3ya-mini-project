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
import authStore from "../Stores/AuthStore";

function Jam3yaDetails(props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const slug = useParams().jam3yaSlug;

  const jam3ya = jam3yaStore.jam3yas.find((jam3ya) => jam3ya.slug === slug);

  const handleDelete = () => {
    jam3yaStore.deleteJam3ya(jam3ya._id);
  };

  // if (!jam3ya) return <Redirect to="/jam3ya-list" />;

  return (
    <div className="detailBackground">
      <br />
      <div className="detail card p-2 m-2 col-lg-6 col-sm-12 detailWrapper">
        {jam3ya && ( // if there is jam3ya show its data
          <>
            <br />
            <h4>{jam3ya.title}</h4>
            <br />
            <img className="card-image-top " src={jam3ya.image} alt="jam3ya" />
            <br />
            <br />
            <div className="row justify-content-center align-self-center col-10">
              <p>Amount: {jam3ya.amount} KD</p>
              <p>Member Limit: {jam3ya.limit}</p>
              <p>
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
            <p className="buttons">
              {jam3ya.limit > jam3ya.users.length &&
              new Date(jam3ya.startDate) > new Date() ? (
                <Button
                  className="buttons"
                  variant="info "
                  onClick={() => jam3yaStore.addUser(jam3ya._id)}
                >
                  Join Jam3ya
                </Button>
              ) : null}
              {new Date(jam3ya.startDate) > new Date() ? (
                <Button
                  className="buttons"
                  variant="outline-info "
                  onClick={() => jam3yaStore.leave(jam3ya._id)}
                >
                  Leave Jam3ya
                </Button>
              ) : null}
              <br />
              <br />

              {authStore.user._id === jam3ya.author._id && (
                <>
                  {" "}
                  <Button
                    className="buttons"
                    variant="outline-info"
                    onClick={openModal}
                  >
                    Update Jam3ya
                  </Button>
                  <UpdateJam3yaModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    jam3ya={jam3ya}
                  />
                  <br />
                  <br />
                  <div className="buttons">
                    <Button variant="outline-danger" onClick={handleDelete}>
                      Delete Jam3ya
                    </Button>
                  </div>{" "}
                </>
              )}
            </p>
          </>
        )}
      </div>
      <br />
      <br />
    </div>
  );
}

export default observer(Jam3yaDetails);
