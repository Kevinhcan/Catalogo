import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-wrap p-8 justify-center gap-12">
      <div className="border-2 border-black ">
        <img
          className="m-2 border-2 border-black"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
          alt=""
        />
        <hr />
        <div className="p-2">
          <h1 className="flex justify-center pb-2">Lorem.</h1>
          <p>
            Precio <span>20</span>
          </p>
          <p>
            Tall <span>S</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
