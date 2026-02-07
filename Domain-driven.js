// Person class represents a real human in our system
class Person {
  constructor(name, age, property = { house: 0, cars: 0, gold: 0 }) {
    // Person ka naam
    this.name = name;

    // Person ki age
    this.age = age;

    // Person ki current property (assets)
    this.property = property;

    // Children array (inheritance receivers)
    this.children = [];
  }

  // -------------------------
  // SETTER: will
  // -------------------------
  // Jaise hi will set hoti hai, inheritance auto distribute hoti hai
  set will(value) {
    // Safety check: agar will false ho to kuch mat karo
    if (!value) return;

    // Children ko inheritance assign kar rahe hain
    // Child 1 gets nothing
    this.children[0] = { house: 0, cars: 0, gold: 0 };

    // Child 2 gets gold
    this.children[1] = { house: 0, cars: 0, gold: 20 };

    // Child 3 gets house and cars
    this.children[2] = { house: 2, cars: 10, gold: 0 };

    // Sab children ke assets ko verify + calculate karo
    this.validateWill();
  }

  // -------------------------
  // METHOD: validateWill
  // -------------------------
  // Ye method children ki property ko jod kar
  // parent ki final property calculate karta hai
  validateWill() {
    // reduce() use karke saare children ki property ko merge kar rahe hain
    this.property = this.children.reduce(
      (total, child) => {
        return {
          house: total.house + child.house,
          cars: total.cars + child.cars,
          gold: total.gold + child.gold
        };
      },
      // Initial value (empty property)
      { house: 0, cars: 0, gold: 0 }
    );
  }

  // -------------------------
  // METHOD: showDetails
  // -------------------------
  // Person ki details print karne ke liye
  showDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log("Property:", this.property);
    console.log("------------------------");
  }
}


// Papa object create kiya
const papa = new Person("Papa", 60);

// Will execute karne ke liye setter call
papa.will = true;

// Output dekhne ke liye
papa.showDetails();
