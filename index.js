// const express = require("express");

// const app = express();
// const port = 5050;

// app.get("/skill", async (req, res) => {
//   const { state } = req.query;

//   if (!state) {
//     return res.status(400).json({ error: "State is required" });
//   }

//   try {
//     const url1 = `https://api.data.gov.in/resource/1224d9d0-6bb3-4014-b897-e55519be2586
// ?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b
// &format=json
// &filters[state]=${state}`;

//     const url2 = `https://api.data.gov.in/resource/6a0cfec4-df79-4c1e-90ba-b8eecb495c4d
// ?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b
// &format=json
// &filters[state]=${state}`;

//     const res1 = await fetch(url1);
//     const data1 = await res1.json();

//     const res2 = await fetch(url2);
//     const data2 = await res2.json();

//     const combinedResult = {
//       state,
//       damages: data1.records ?? [],
//       Disaster_fund: data2.records ?? [],
//     };

//     res.send(
//       JSON.stringify(
//         {
//           combinedResult,
//         },
//         null,
//         2,
//       ),
//     );
//   } catch (err) {
//     res.status(500).json({ error: " internal server error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });







const express = require("express");

const app = express();
const port = 5050;

let uid =0;
class Animal  {

    Animals = {};
    length = {}

getallAnimal(){
    if(!this.length){
        throw new Error("not Animansl")
    }
    return this.Animals;
}

getanimal(id){
    const Animal = this.Animals[id];
    if(!Animal){
        throw new Error("not found on this id")
    }
    return this.Animal;
}

postanimal(Animal){
const newanimal = {
    Name:Animal.Name,
    Type:Animal.Type
}
this.Animals[id]=newanimal
this.length++;

return this.newanimal;

}

putanimal(id,Animal){
  if(!this.Animals[id]){
    throw new Error("not found ")
  }
  this.Animals[id] = {
    ...this.Animals[id],
    ...Animal,
  };
  return this.Animals[id];
}

deletanimal(id){
if(!this.Animals[id]){
    throw new Error ("id not founded")
}
 delete this.Animals[id]
 this.length--;
}
}

const Animals = new Animal();

