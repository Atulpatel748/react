import { useState } from "react";

export default function LikeButton() {
  let [liked, setLiked] = useState(false);
  let clicked = () => {
    console.log("clicked");
    setLiked(!liked);
  };
  return (
    <div>
      <p onClick={clicked}>
        <i className={`fa-regular fa-heart ${liked ? "fa-solid" : ""}`}></i>
      </p>
    </div>
  );
}
