import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const LottieAnimation = ({ src, loop = true, autoplay = true, style }) => {
  return <Player src={src} loop={loop} autoplay={autoplay} style={style} />;
};

export default LottieAnimation;
