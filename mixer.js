let mixerSwitch = "off";   
let regulator = "slow";  
let speed = 0;



function MixerController() {

  if (mixerSwitch === "on") {
    console.log("Mixer Started ");

    if (regulator === "slow") {
      speed = 5;
    }
    else if (regulator === "mid") {
      speed = 10;
    }
    else if (regulator === "fast") {
      speed = 15;
    }

    console.log("Mixer Speed:", speed + "ms");

  } else {
    console.log("Mixer Stopped ");
    speed = 0;
  }
}










