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