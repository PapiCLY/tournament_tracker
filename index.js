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

    // Create elements
    const personDiv = document.createElement("div");
    personDiv.classList.add("person");

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Name");

    const ageSelect = document.createElement("select");
    ageSelect.innerHTML = `
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
    `;

    const addButton = document.createElement("button");
    addButton.textContent = "Add";

    // Add event listener to the button
    addButton.addEventListener("click", function() {
        // Retrieve name and age values
        const name = nameInput.value;
        const age = ageSelect.value;

        // Create new list item
        const listItem = document.createElement("li");
        listItem.textContent = `${name}, ${age}`;

        // Append list item to the person list
        personList.appendChild(listItem);

        // Clear input fields
        nameInput.value = "";
    });

    // Append elements to the person div
    personDiv.appendChild(nameInput);
    personDiv.appendChild(ageSelect);
    personDiv.appendChild(addButton);

    // Append person div to the person list
    personList.appendChild(personDiv);
}