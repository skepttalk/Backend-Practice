
class Motor {
  constructor(type) {
    this.type = type;
  }
  run() {
    console.log(this.type + " motor running");
  }
}


class Material {
  constructor(type) {
    this.type = type;
  }
}


class Blade {
  constructor(type) {
    this.type = type;
  }
}


class Jar {
  constructor(type, material, blade) {
    this.type = type;
    this.material = material;
    this.blade = blade;
  }

  info() {
    console.log(
      `${this.type} jar | Material: ${this.material.type} | Blade: ${this.blade.type}`
    );
  }
}


class Coupler {
  constructor(type) {
    this.type = type;
  }
}


class Mixer {
  constructor(motor, jar, coupler) {

    this.motor = motor;
    this.jar = jar;
    this.coupler = coupler;

    this.switch = "off";
    this.regulator = "slow";
    this.speed = 0;
  }

  start() {
    if (this.switch === "on") {
      console.log("Mixer Running ");


      this.motor.run();


      if (this.regulator === "slow") this.speed = 5;
      if (this.regulator === "mid") this.speed = 10;
      if (this.regulator === "fast") this.speed = 15;

      console.log("Speed:", this.speed + "ms");


      this.jar.info();
      console.log("Coupler:", this.coupler.type);
    } else {
      console.log("Mixer OFF ");
    }
  }

  timer(seconds) {
    if (this.switch === "on") {
      console.log("Timer Started ");

      setTimeout(() => {
        console.log("Timer Done → Turning OFF Mixer");
        this.switch = "off";
        this.start();
      }, seconds * 1000);
    }
  }
}
