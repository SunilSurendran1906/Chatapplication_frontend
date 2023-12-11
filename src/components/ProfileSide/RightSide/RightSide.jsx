import React, { useState } from "react";
import "./RightSide.css";
import Comment from "../../../img/comment.png";
import Home from "../../../img/home.png";
import Noti from "../../../img/noti.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard.jsx";
import ShareModel from "../../ShareModel/ShareModel.jsx";
import { Link } from "react-router-dom";
function RightSide(props) {
  const [modelOpened, setModelOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="../home">
          {" "}
          <img src={Home} alt="Home Pic" />
        </Link>
        <UilSetting />
        <img src={Noti} alt="Notification" />
        <Link to="../chat">
          {" "}
          <img src={Comment} alt="CommentImg" />
        </Link>
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModelOpened(true)}>
        Share
      </button>
      <ShareModel modelOpened={modelOpened} setModelOpened={setModelOpened} />
    </div>
  );
}

export default RightSide;
