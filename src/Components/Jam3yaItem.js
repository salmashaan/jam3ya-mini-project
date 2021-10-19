import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

function Jam3yaItem(props) {
  const jam3ya = props.jam3ya;
  return (
    <Link to={`/jam3ya-list/${jam3ya.slug}`}>
      <div className="card p-2 m-3 col-lg-7 col-sm-12 itemWrapper">
        <p>Title: {jam3ya.title}</p>
        <img className="card-image-top" src={jam3ya.image} alt={jam3ya.title} />
        <p>Amount: {jam3ya.amount} KD</p>
        <p>Limit: {jam3ya.limit}</p>
        <p>
          Start Date: <Moment format="DD/MM/YYYY">{jam3ya.startDate}</Moment>
        </p>
        <p>
          End Date: <Moment format="DD/MM/YYYY">{jam3ya.endDate}</Moment>
        </p>
      </div>
    </Link>
  );
}
export default Jam3yaItem;
