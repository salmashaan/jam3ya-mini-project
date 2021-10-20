import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

function Jam3yaItem(props) {
  const jam3ya = props.jam3ya;
  return (
    <div className="card p-5 m-4 col-lg-5 col-sm-12 itemWrapper">
      <div>
        <Link to={`/${jam3ya.slug}`}>
          <p>{jam3ya.title}</p>
          <img
            className="card-image-top"
            src={jam3ya.image}
            alt={jam3ya.title}
          />
        </Link>
      </div>
    </div>
  );
}

export default Jam3yaItem;
