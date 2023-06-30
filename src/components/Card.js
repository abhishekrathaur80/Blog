import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col items-center p-4 border ">
      <div className="flex bg-blue text-white">{props.usename.toUpperCase}</div>
      <div className="flex flex-col w-full">
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.postedOn}</p>
      </div>
    </div>
  );
};

export default Card;
