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



    const res1 = await fetch(url1);
    const data1 = await res1.json();

    const res2 = await fetch(url2);
    const data2 = await res2.json();

    const combinedResult = {
      state,
      damages: data1.records ?? [],
      Disaster_fund: data2.records ?? [],
    };

    res.send(
      JSON.stringify(
        {
          combinedResult,
        },
        null,
        2,
      ),
    );
  } catch (err) {
    res.status(500).json({ error: " internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});







