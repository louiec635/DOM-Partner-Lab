let teamNames = ["Chris", "Michael"];

function addNamesToPage(teamNames) {
    let ulNames = document.querySelector('ul');
    for (let i of teamNames) {
    ulNames.innerHTML += `<li>${i}</li>`;
}
}
addNamesToPage(teamNames);
