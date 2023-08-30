
// import { LottieInteractivity } from '@lottiefiles/lottie-interactivity';
import { useLottie, useLottieInteractivity } from "lottie-react";
import likeButton from "../animation_lk3sxxfw.json";

const style = {
  height: 300,
  with: 300,
  border: 3,
  // borderStyle: "solid",
  borderRadius: 7,
  
};

const options = {
  animationData: likeButton,
};

function Ottie() {

  const lottieObj = useLottie(options,style);
  const Animation = useLottieInteractivity({
    lottieObj,
  
    mode:"scroll",
    actions: [
    {
        visibility:[0, 1.0],
        type: "seek",
        frames: [1, 200],
    },
    ]
  });

  return Animation;
}

export default Ottie;