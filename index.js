// import express from "express";
// const app = express();
// const port = 5050;

// app.use(express.json());

// app.get("/skill", async (req, res) => {
//   const { state } = req.query;

//   if (!state) {
//     return res.status(400).json({
//       success: false,
//       message: "State name is required",
//     });
//   }
//   try {
//     const response = await fetch("https://api.data.gov.in/resource/15150682-a9ed-475d-b0e3-67b292e90d22?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b&format=json");
//     const result = await response.json();

//     const records = result.records;

//     const filtered = records.filter(
//       (item) =>
//         item.state_ut.toLowerCase() === state.toLowerCase()
//     );

//     if (filtered.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "No data found for this state",
//       });
//     }

//     res.json({
//       success: true,
//       data: filtered[0],
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// });


// const server = app.listen(port, () => {
//   console.log(`Modern Express app listening on port ${port}`);
// });


// const express = require("express");
// const axios = require("axios");

// const port = 5050;

// const app = express();

// app.get("/skill", async (req, res) => {
//   const {state} = req.query;

//   if (!state) {
//     return res.status(400).json({ error: "State is required" });
//   }

//   try {
 
//     const damagesData = await fetch("https://api.data.gov.in/resource/1224d9d0-6bb3-4014-b897-e55519be2586?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b&format=json&filters%5Bstate%5D");

//     const response = await damagesData.json();

//      const State1 = response.state 

    
//     const extraData = await fetch("https://api.data.gov.in/resource/ba059363-c6b5-4199-93a5-e132d1fba02a?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b&format=json&filters%5Bstate%5D");

//     const response2 = await extraData.json()

//     const state2  =  response2.state

//     const combinedResult = {
//       state,
//      ...state,
//      ...state2
//     };

//     res.json(combinedResult);

//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

// const server = app.listen(port, () => {
//   console.log(`Modern Express app listening on port ${port}`);
// });


const express = require("express");

const app = express();
const port = 5050;

app.get("/skill", async (req, res) => {
  const { state } = req.query;

  if (!state) {
    return res.status(400).json({ error: "State is required" });
  }

  try {
    const url1 = `https://api.data.gov.in/resource/1224d9d0-6bb3-4014-b897-e55519be2586
?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b
&format=json
&filters[state]=${state}`;

    const url2 = `https://api.data.gov.in/resource/6a0cfec4-df79-4c1e-90ba-b8eecb495c4d
?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b
&format=json
&filters[state]=${state}`;

    const res1 = await fetch(url1);
    const data1 = await res1.json();

    const res2 = await fetch(url2);
    const data2 = await res2.json();

    const combinedResult = {
      state,
      damages: data1.records ?? [],
       Disaster_fund: data2.records ?? []
    };

     res.send(JSON.stringify({
      combinedResult
}, null, 2));

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


