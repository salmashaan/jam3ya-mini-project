import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

function Jam3yaItem(props) {
  const jam3ya = props.jam3ya;
  return (
    <Link
      className="p-5 m-5 col-lg-4 col-sm-12 itemWrapper"
      to={`/${jam3ya.slug}`}
    >
      <div>
        <p>{jam3ya.title}</p>
        <img className="card-image-top" src={jam3ya.image} alt={jam3ya.title} />
      </div>
    </Link>
  );
}

export default Jam3yaItem;
