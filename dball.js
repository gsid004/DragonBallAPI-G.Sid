//Declarations
const container = document.getElementById("characters");

const fetchDBimgs = async() => {
const res = await fetch("https://dragonball-api.com/api/characters");
const data = await res.json();
}
//Fetch
fetch("https://dragonball-api.com/api/characters")
.then((response) => response.json())
.then((result) => {
  result.items.map((characters) => {

    //Card
    const card = document.createElement("div");
    card.className = "card";

    //Images
    const imgs = document.createElement("img");
    imgs.src = characters.image;

    //Names
    const name = document.createElement("h2");
    name.textContent = characters.name;

    //Race
    const race = document.createElement("span");
    race.textContent = characters.race;

    //Gender
    const gender = document.createElement("span");
    gender.textContent = " " + characters.gender;

    //Base Ki
    const ki = document.createElement("p");
    ki.textContent = "Ki: " + characters.ki

    //Max Ki
    const maxKi = document.createElement("p");
    maxKi.textContent = "Max Ki: " + characters.maxKi;
    
    
    //AppendChild
    container.appendChild(card);
    card.appendChild(imgs);
    card.appendChild(name);
    card.appendChild(race);
    card.appendChild(gender);
    card.appendChild(ki);
    card.appendChild(maxKi);
  });
});