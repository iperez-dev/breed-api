const express = require("express");
const app = express();
const PORT = 8000;

//-------------------------------------------------------------------------
const breeds = {
  yorkie: {
    Origin: "Yorkshire,  England",
    Height: "8 to 9 inches",
    Weight: "4 to 7 lbs",
    "Life span": "13 to 16 years",
    facts:
      "Yorkshire terriers are playful and energetic dogs. They often exhibit separation anxiety when left alone, which is a reason that some owners keep two dogs.",
  },
  "golden retriever": {
    Origin: "Scotland",
    Height: "24 in",
    Weight: "5 to 75 lb",
    "Life span": "12 to 13 years",
    facts:
      "It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries",
  },
  "labrador retriever": {
    Origin: "United Kingdom",
    Height: "22 to 22.5 in",
    Weight: "65 to 80 lb",
    "Life span": "10 to 12 years",
    facts:
      "The Labrador is loyal, obedient and playful. It was bred as a sporting and hunting dog but is widely kept as a companion dog. It may also be trained as a guide or assistance dog, or for rescue or therapy work",
  },
  "french bulldog": {
    Origin: "France",
    Height: "27 to 35 cm",
    Weight: "9 to 14 kg",
    "Life span": "10 to 12 years",
    facts:
      "It is commonly kept as a pet, and is among the most frequently registered dogs in a number of countries including Australia, the United Kingdom and the United States.",
  },
  beagle: {
    Origin: "England",
    Height: "13 to 16 in",
    Weight: "22 to 25 lb",
    "Life span": "10 to 15 years",
    facts:
      "Possessing a great sense of smell and superior tracking instincts, the beagle is the primary breed used as a detection dog for prohibited agricultural imports and foodstuffs in quarantine around the world. ",
  },
  "german shepherd": {
    Origin: "Germany",
    Height: "24 to 26 in",
    Weight: "66 to 88 lb",
    "Life span": "9 to 13 years",
    facts:
      "It was originally bred as a herding dog, for herding sheep. It has since been used in many other types of work, including disability assistance, search-and-rescue, police work, and warfare ",
  },
  unknown: {
    Origin: "unknown",
    Height: "unknown",
    Weight: "unknown",
    "Life span": "unknown",
    facts: "unknown",
  },
};

//-------------------------------------------------------------------------
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:petBreed", (request, response) => {
  const petBreed = request.params.petBreed.toLowerCase();
  if (breeds[petBreed]) {
    response.json(breeds[petBreed]);
  } else {
    response.json(breeds["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});
