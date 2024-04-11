const numsAndChars = /[^a-zA-Z0-9\s]/;
let about = document.getElementById('aboutModal')
let aboutBtn = document.getElementById('abtBtn')
let aboutSpan = document.querySelector('.abtClose');
let rules = document.getElementById('rulesModal')
let rulesBtn = document.getElementById('rulesBtn')
let rulesSpan = document.querySelector('.rulesClose')

//opens modal
aboutBtn.onclick = function(){
    about.style.display = 'block';
}

rulesBtn.onclick = function(){
    rules.style.display = 'block';
}
//close modal
aboutSpan.onclick = function(){
    about.style.display = 'none';
}

rulesSpan.onclick = function(){
    rules.style.display = 'none';
}

//click anywhere to close modal
window.onclick = function(event){
    if(event.target === about || event.target === rules){
        about.style.display = 'none'
        rules.style.display = 'none'
    }
}


function addPerson() {
    const personList = document.getElementById("personList");
    const finalScoresSection = document.getElementById("finalScores");

    // Create elements
    const personDiv = document.createElement("div");
    personDiv.classList.add("person");

    const nameInputLabel = document.createElement("label");
    nameInputLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Enter name");

    const roundLabels = ["1st Round", "2nd Round", "3rd Round", "4th Round", "5th Round"]; // Labels for each round

    // Create input fields and labels for each round
    const roundInputs = [];
    const hoopHeightInputs = [];
    for (let i = 0; i < 5; i++) {
        const roundLabel = document.createElement("label");
        roundLabel.textContent = roundLabels[i];
        
        const roundInput = document.createElement("input");
        roundInput.setAttribute("type", "number");
        roundInput.setAttribute("min", "0");
        
        const hoopHeightLabel = document.createElement("label");
        hoopHeightLabel.textContent = "Hoop Height:";
        const hoopHeightInput = document.createElement("select");
        hoopHeightInput.innerHTML = `
            <option value="8.5">8.5 or lower</option>
            <option value="9">9</option>
            <option value="9.5">9.5</option>
            <option value="10">10</option>
        `;
        
        roundInputs.push(roundInput);
        hoopHeightInputs.push(hoopHeightInput);
        
        personDiv.appendChild(roundLabel);
        personDiv.appendChild(roundInput);
        personDiv.appendChild(hoopHeightLabel);
        personDiv.appendChild(hoopHeightInput);
    }

    const addButton = document.createElement("button");
    addButton.textContent = "Add";

    // Add event listener to the button
    addButton.addEventListener("click", function() {
        // Retrieve name, hoopHeight, and round values
        const name = nameInput.value;
        const roundData = [];
        for (let i = 0; i < 5; i++) {
            const roundScore = parseInt(roundInputs[i].value || 0); // Convert empty string to 0
            const hoopHeight = hoopHeightInputs[i].value;
            roundData.push({ score: roundScore, hoopHeight: hoopHeight });
        }

        // Calculate total score based on hoopHeight for each round
        const totalScores = roundData.map(round => {
            if (round.hoopHeight === "8.5") {
                return round.score;
            } else if (round.hoopHeight === "9") {
                return 2 * round.score;
            } else if (round.hoopHeight === "9.5") {
                return 3 * round.score;
            } else if (round.hoopHeight === "10") {
                return 4 * round.score;
            }
        });

        const totalScore = totalScores.reduce((acc, curr) => acc + curr, 0);

        // Create new list item with total score
        const listItem = document.createElement("li");
        listItem.textContent = `${name}, Total Score: ${totalScore}`;

        // Append list item to the person list
        personList.appendChild(listItem);

        // Append name and total score to final scores section
        const finalScoreItem = document.createElement("div");
        finalScoreItem.textContent = `${name}, Total Score: ${totalScore}`;
        finalScoresSection.appendChild(finalScoreItem);

        // Clear input fields
        nameInput.value = "";
        roundInputs.forEach(input => input.value = "");
        hoopHeightInputs.forEach(input => input.selectedIndex = 0); // Reset hoopHeight to default
    });

    // Append elements to the person div
    personDiv.appendChild(nameInputLabel);
    personDiv.appendChild(nameInput);
    personDiv.appendChild(addButton);

    // Append person div to the person list
    personList.appendChild(personDiv);
}



