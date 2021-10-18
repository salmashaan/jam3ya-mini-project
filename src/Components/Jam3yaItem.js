import React from "react";

function Jam3yaItem(props) {
  const jam3ya = props.jam3ya;
  return (
    <div>
      <p>Title: {jam3ya.title}</p>
      <img src={jam3ya.image} alt={jam3ya.title} />
      <p>Amount: {jam3ya.amount}</p>
      <p>Limit: {jam3ya.limit}</p>
      <p>Start Date: {jam3ya.startDate}</p>
      <p>End Date: {jam3ya.endDate}</p>
    </div>
  );
}
export default Jam3yaItem;
