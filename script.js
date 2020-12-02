// let teamNames = ["Chris", "Michael"];

// function addNamesToPage(teamNames) {
//   let ulNames = document.querySelector("ul");
//   for (let i of teamNames) {
//     ulNames.innerHTML += `<li>${i}</li>`;
//   }
// }
// addNamesToPage(teamNames);





// setImageSize("small");
// function setImageSize(userAnswer) {
//     const imgElement = document.querySelector("img");
//     userAnswer = userAnswer.toLowerCase();
//     if (userAnswer === "small") {
//         imgElement.style.width = "400px";
//         imgElement.style.height = "250px";
//     } else if (userAnswer === "large") {
//         imgElement.style.width = "800px";
//         imgElement.style.height = "500px";
//     } else {
//       alert("I don't understand");
//     }
// }

// // const userAnswer = prompt("Do you want the image to be small or large?");
// // setImageSize(userAnswer);




// // const userColor = prompt("Please enter a color");

// // let body = document.body;

// // function bodyColor (userColor) {
// //     body.style.backgroundColor = userColor;
// // }

// // bodyColor(userColor);




// let teamMembers = [];
// // let member = prompt("What is one of your team members?");
// teamMembers.push(member);
// addNamesToPage(teamMembers);





// let userName = prompt("Please enter your name");

// function userResume () {
//   let body = document.body;
//   body.innerHTML += `<h1>${userName}'s Resume!</h1>`;
// }

// userResume();



// const skills = ["Javascript", "HTML", "CSS", "Microsoft Paint"];
// const listType = getListType();
// listSkills(listType, skills);

// function getListType() {
//   const userTag = prompt("Ordered or unordered list?").toLowerCase();
//   if (userTag === "ordered" || userTag === "ol") {
//     return "ol";
//   }
//   else if (userTag === "unordered" || userTag === "ul") {
//     return "ul";
//   }
//   else {
//     alert("I don't understand");
//   }
// }

// function listSkills(listType, skills) {
//   const listElement = document.createElement(listType);
//   document.body.appendChild(listElement);
  
//   for (const s of skills) {
//     listElement.innerHTML += `<li>${s}</li>`;
//   }
// }






// Part Three
// 1.
const buttonElement = document.createElement("button");
document.body.appendChild(buttonElement);

buttonElement.addEventListener("click", () => { 

  document.body.style.backgroundColor = "cyan"; 
} 
);

//Part 2
buttonElement.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "cyan") {
  document.body.style.backgroundColor = "salmon";
  } else {
  document.body.style.backgroundColor = "cyan";
  }
} 
);