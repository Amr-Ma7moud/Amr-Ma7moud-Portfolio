import { Component } from "lucide-react"
import SwitchingText from './switchingText/switchingText'
  
  const roles = [
    " An Android App Developer  ",
    " A Full-Stack Web Developer",
    " A Computer Science Student",
    " An Arch Linux Enthusiast  ",
  ];

  const GRADIENTS = [
    "linear-gradient(90deg, #673AB7, #FF9800, #673AB7)",
    "linear-gradient(90deg, #673AB7, #ff5500, #673AB7)",
    "linear-gradient(90deg, #241440, #673AB7, #241440)",
    "linear-gradient(90deg, #673AB7, #000000, #673AB7)",
    "linear-gradient(90deg, #673AB7, #ffffff, #673AB7)",
    "linear-gradient(90deg, #673AB7, #3d3d3d, #673AB7)",
    "linear-gradient(90deg, #673AB7, #cccccc, #673AB7)",
    "linear-gradient(90deg, #673AB7, #2196F3, #673AB7)",
  ];

function CoolTextSwitch() {
    return (
      <div
        className="inline-flex items-center text-light-gray rounded-2xl px-1 sm:px-2 md:px-2 py-0.5 sm:py-1 md:py-2"
        style={{
          background: GRADIENTS[2],
        }}  
      >
        <SwitchingText
          texts={roles}
          mainClassName=""
          staggerFrom={"center"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          animatePresenceMode={"wait"}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden "
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2500}
        />
      </div>
    );
}
export default CoolTextSwitch;