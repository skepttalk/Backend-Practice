class Mixer {
  constructor() {
    this.switch = "off";
    this.regulator = "slow";
    this.speed = 0;
  }

  start() {
    if (this.switch === "on") {
      console.log("Mixer Running ");

      if (this.regulator === "slow") this.speed = 5;
      if (this.regulator === "mid") this.speed = 10;
      if (this.regulator === "fast") this.speed = 15;

      console.log("Speed:", this.speed + "ms");
    } else {
      console.log("Mixer OFF ");
    }
  }

  timer(seconds) {
    if (this.switch === "on") {
      console.log("Timer Started ⏳");

      setTimeout(() => {
        console.log("Timer Done  Turning OFF Mixer");
        this.switch = "off";
        this.start();
      }, seconds * 1000);
    }
  }
}
