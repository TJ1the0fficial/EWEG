// Sign
const sign = document.getElementById("sign");

//Buttons
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");

let choosen_button = "";
let button_pressing_active = false;

// System ('w' == "word")
let q = "Next Word coming soon...";
let a = "Right Answer";
let w1 = "";
let w2 = "";
let w3 = "";
let w4 = "";

let rand = 0;
let randr = 0;
let r1 = 0;
let r2 = 0;
let r3 = 0;
let r4 = 0;

// sounds
const good_answer = new Audio("good_answer.mp3");
const bad_answer = new Audio("bad_answer.mp3");

async function loadWords() { // ChatGPT supported this function, cause I don't really know JSON
    try {
        const response = await fetch("UnitOfWords.json");
        const data = await response.json();

        console.log("Words loaded:", data);

        // Pick random word and options
        rand = Math.floor(Math.random() * data.EnglishWords.length);
        q = data.EnglishWords[rand]["hun"];
        a = data.EnglishWords[rand]["en"];

        r1 = Math.floor(Math.random() * data.EnglishWords.length);
        w1 = data.EnglishWords[r1]["en"];

        r2 = Math.floor(Math.random() * data.EnglishWords.length);
        w2 = data.EnglishWords[r2]["en"];

        r3 = Math.floor(Math.random() * data.EnglishWords.length);
        w3 = data.EnglishWords[r3]["en"];

        r4 = Math.floor(Math.random() * data.EnglishWords.length);
        w4 = data.EnglishWords[r4]["en"];

        randr = Math.floor(Math.random() * 4);
        if (randr == 0){
            w1 = data.EnglishWords[rand]["en"];
        } else if (randr == 1){
            w2 = data.EnglishWords[rand]["en"];
        } else if (randr == 2){
            w3 = data.EnglishWords[rand]["en"];
        } else if (randr == 3){
            w4 = data.EnglishWords[rand]["en"];
        }

        // Update the UI
        sign.innerText = q;
        b1.innerText = w1;
        b2.innerText = w2;
        b3.innerText = w3;
        b4.innerText = w4;

    } catch (error) {
        console.error("Error loading words:", error);
    }
}

function check_a(answer){
    if (answer == a)
    {
        good_answer.play();
        loadWords();
    } else {bad_answer.play();}
}

document.addEventListener("DOMContentLoaded",() => {

    loadWords();

    // Button even handling
    b1.addEventListener("click",() => {
        document.documentElement.style.setProperty("--b1","0px");
        document.documentElement.style.setProperty("--bt1","10px");        
        choosen_button = "b1";
        button_pressing_active = true;
        check_a(w1);
    });
    b1.addEventListener("transitionend",() => {
        document.documentElement.style.setProperty("--b1","10px");
        document.documentElement.style.setProperty("--bt1","0px");
        button_pressing_active = false;
    });

    b2.addEventListener("click",() => {
        document.documentElement.style.setProperty("--b2","0px");
        document.documentElement.style.setProperty("--bt2","10px");        
        choosen_button = "b2";
        button_pressing_active = true;
        check_a(w2);
    });
    b2.addEventListener("transitionend",() => {
        document.documentElement.style.setProperty("--b2","10px");
        document.documentElement.style.setProperty("--bt2","0px");
        button_pressing_active = false; 
    });

    b3.addEventListener("click",() => {
        document.documentElement.style.setProperty("--b3","0px");
        document.documentElement.style.setProperty("--bt3","10px");        
        choosen_button = "b3";
        button_pressing_active = true;
        check_a(w3);
    });
    b3.addEventListener("transitionend",() => {
        document.documentElement.style.setProperty("--b3","10px");
        document.documentElement.style.setProperty("--bt3","0px");
        button_pressing_active = false; 
    });

    b4.addEventListener("click",() => {
        document.documentElement.style.setProperty("--b4","0px");
        document.documentElement.style.setProperty("--bt4","10px");        
        choosen_button = "b4";
        button_pressing_active = true;
        check_a(w4);
    });
    b4.addEventListener("transitionend",() => {
        document.documentElement.style.setProperty("--b4","10px");
        document.documentElement.style.setProperty("--bt4","0px");
        button_pressing_active = false; 
    });
});
