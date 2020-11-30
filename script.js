let teamNames = ["Chris", "Michael"];

function addNamesToPage(teamNames) {
  let ulNames = document.querySelector("ul");
  for (let i of teamNames) {
    ulNames.innerHTML += `<li>${i}</li>`;
  }
}
addNamesToPage(teamNames);






function setImageSize(userAnswer) {
    const imgElement = document.querySelector("img");
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer === "small") {
        imgElement.style.width = "400px";
        imgElement.style.height = "250px";
    } else if (userAnswer === "large") {
        imgElement.style.width = "800px";
        imgElement.style.height = "500px";
    } else {
      alert("I don't understand");
    }
}

// const userAnswer = prompt("Do you want the image to be small or large?");
// setImageSize(userAnswer);

const userColor = prompt("Please enter a color");

let body = document.body;

function bodyColor (userColor) {
    body.style.backgroundColor = userColor;
}

bodyColor(userColor);

