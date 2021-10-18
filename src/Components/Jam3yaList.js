import React, { useState } from "react";
import Jam3yaItem from "./Jam3yaItem";
import { Button } from "react-bootstrap";
import AddJam3yaModal from "./AddJam3yaModal";
import jam3yaStore from "../Stores/Jam3yaStore";
import { observer } from "mobx-react";

function Jam3yasList() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const jam3yas = jam3yaStore.jam3yas.map((jam3ya) => (
    <Jam3yaItem jam3ya={jam3ya} />
  ));
  return (
    <div className="container">
      <Button variant="warning" onClick={openModal}>
        Add Jam3ya
      </Button>
      <AddJam3yaModal isOpen={isOpen} closeModal={closeModal} />
      <div className="row mb-30 mt-30">{jam3yas}</div>
    </div>
  );
}

export default observer(Jam3yasList);
