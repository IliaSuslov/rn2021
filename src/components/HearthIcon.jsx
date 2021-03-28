import React, { useEffect } from "react";
import { Image } from "react-native";
import Active from "../../assets/Active.png";
import Inactive from "../../assets/Inactive.png";

function HearthIcon(props) {
  return <Image source={props.state ? Active : Inactive} />;
}

export default HearthIcon;
