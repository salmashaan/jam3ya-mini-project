import React, { useState } from "react";
import Jam3yaItem from "./Jam3yaItem";
import { Button } from "react-bootstrap";
import AddJam3yaModal from "./AddJam3yaModal";
import jam3yaStore from "../Stores/Jam3yaStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";

function Jam3yasList() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const jam3yas = jam3yaStore.jam3yas
    .filter((jam3ya) =>
      jam3ya.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((jam3ya) => <Jam3yaItem jam3ya={jam3ya} />);

  return (
    <div>
      <br />
      <p className="search">
        <Button className="add-button" variant="info" onClick={openModal}>
          Add Jam3ya
        </Button>
        <SearchBar setQuery={setQuery} />{" "}
      </p>

      <AddJam3yaModal isOpen={isOpen} closeModal={closeModal} />
      <div className="col-md-auto text-center list">{jam3yas}</div>
    </div>
  );
}

export default observer(Jam3yasList);
