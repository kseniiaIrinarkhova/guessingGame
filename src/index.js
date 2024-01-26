/***************************************************************** */
/********Content*************************************************** */
const questions = [
    {
        question: "There are 7 days in week.",
        answer: true
    },
    {
        question: "It's 2022 year now.",
        answer: false
    },
    {
        question: "There are 60 seconds in a minute.",
        answer: true
    },
    {
        question: "We are living in Mars.",
        answer: false
    },
    {
        question: "The Earth is round.",
        answer: true
    }
];

const pictureParts = [
    {
        id: 4,
        points: [[1, 1], [1, 2], [1, 7], [1, 8], [1, 9], [2, 1], [2, 3], [2, 6], [2, 9], [3, 1], [3, 4], [3, 5], [3, 9], [4, 1], [4, 9], [5, 1], [5, 9], [6, 1], [6, 3], [6, 6], [6, 9], [6, 13], [6, 14], [7, 1], [7, 3], [7, 6], [7, 9], [7, 12], [7, 15], [8, 1], [8, 9], [8, 10], [8, 12], [8, 14], [8, 15], [9, 2], [9, 8], [9, 11], [9, 14], [10, 3], [10, 12], [10, 13], [11, 3], [11, 12], [12, 3], [12, 5], [12, 7], [12, 10], [12, 12], [13, 3], [13, 5], [13, 7], [13, 8], [13, 9], [13, 10], [13, 12], [14, 3], [14, 4], [14, 5], [14, 6], [14, 7], [14, 9], [14, 10], [14, 11], [14, 12]],
        color: "black"
    },
    {
        id: 3,
        points: [[4, 2], [4, 6], [4, 7], [4, 8], [5, 2], [5, 5], [5, 6], [5, 7], [5, 8], [6, 5], [6, 7], [6, 8], [7, 7], [7, 8], [7, 13], [7, 14], [8, 13], [9, 9], [9, 10], [9, 12], [9, 13], [10, 11]],
        color: "#B5862F"
    },
    {
        id: 2,
        points: [[2, 2], [2, 7], [2, 8], [2, 3], [2, 7], [2, 8]],
        color: "#EECDB2"
    },
    {
        id: 1,
        points: [[3, 3], [3, 6], [4, 3], [4, 5]],
        color: "#616161"
    },
    {
        id: 0,
        points: [[8, 4]],
        color: "#F69988"
    },
];
/******************************************************************** */



/************************************************************** */
/**Prepare a main window */

let availH = window.screen.availHeight;
let availW = window.screen.availWidth;
const body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignContent = "center";

const app = document.getElementById("app");
console.log(app);
app.style.width = 0.75 * availW;
app.style.height = 0.75 * availH;

app.style.textAlign = "center"
app.appendChild(document.createElement("h1")).textContent = "Let's find the hidden picture";

app.appendChild(createTable());

/*************************************************************************** */

let startQuestion;
setTimeout(() => {
    startQuestion = window.confirm("Let's start our game!");
    if (startQuestion) {
        let madeMistake = false;
        console.log("start")
        for (let questionId in questions) {
            setTimeout(() => {
                let check = askQuestion(questions[questionId]);
                if (check && !madeMistake) {
                    colorPicture(pictureParts.filter((part) => part.id == Number(questionId))[0]);
                }
                else {
                    madeMistake = true;
                }
                if (Number(questionId) == questions.length - 1) {
                    if (madeMistake) alert("Let's try again!")
                    else {
                        const cells = document.querySelectorAll("td");
                        for (const cell of cells) {
                            cell.style.opacity = "1";
                        }
                        setTimeout(() => {alert("You did it!")},200);
                    }
                }
                sleep(200);
            }, 300);


        }

    }
}, 300);

// if (startQuestion) {
//     let madeMistake = false;
//     console.log("start")
//     for (let questionId in questions) {
//         let check;
//         setTimeout(() => { check = askQuestion(questions[questionId]) }, 300);
//         if (check) {
//             colorPicture(pictureParts.filter((part) => part.id == Number(questionId))[0]);
//             window.top.focus();
//             sleep(2000);
//         }
//         else madeMistake = true;
//         //sleep(500);
//     }
//     if (madeMistake) window.alert("Try again!");
// }

/********************************************************* */
/*****Functions******************************************* */

function createTable() {
    const table = document.createElement("table");
    for (let i = 0; i < 16; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 17; j++) {
            const td = document.createElement("td");
            td.style.width = "20px";
            td.style.height = "20px";
            td.style.background = "ivory"
            td.style.opacity = "0.3";
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    table.style.borderCollapse = "collapse";
    return table;
}

function askQuestion(question) {
    let answer = window.confirm(question.question + "\nPress 'OK' if 'Yes' and 'Cancel' if 'No'!");
    return answer == question.answer;
}

function colorPicture(picPart) {
    let table = document.querySelector("table");
    for (const point of picPart.points) {
        table.childNodes[point[0]].childNodes[point[1]].style.background = picPart.color;
    }
}



function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

