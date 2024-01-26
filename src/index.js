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
//create the main gaming field - the table with hidden picture
app.appendChild(createTable());

/*************************************************************************** */

let startQuestion;
setTimeout(() => {
    //just small timeout before the game start
    startQuestion = window.confirm("Let's start our game!");
    //if user decided to play
    if (startQuestion) {
        //mistake flag
        let madeMistake = false;
        //for each question in questions check the answers
        for (let questionId in questions) {
            //use delay to see the result
            setTimeout(() => {
                let check = askQuestion(questions[questionId]); //check answer
                if (check && !madeMistake) {
                    //paint only if all answers are correct
                    colorPicture(pictureParts.filter((part) => part.id == Number(questionId))[0]);
                }
                else {
                    //raise the flag that user made a mistake
                    madeMistake = true;
                }
                //on the last iteration change the opacity of picture and show the information about game result
                if (Number(questionId) == questions.length - 1) {
                    //if user made a mistake only tell about it
                    if (madeMistake) alert("Let's try again!")
                    else {
                        //else change opacity in pixel picture
                        const cells = document.querySelectorAll("td");
                        for (const cell of cells) {
                            cell.style.opacity = "1";
                        }
                        //send congrats
                        setTimeout(() => { alert("You did it!") }, 200);
                    }
                }
                //add aditional delay between questions
                sleep(200);
            }, 300);
        }
    }
}, 300);

/********************************************************* */
/*****Functions******************************************* */
/**
 * Function creates main page content
 * @returns table for DOM
 */
function createTable() {
    
    const rowsAmount = 16;
    const colsAmount = 17; 

    const table = document.createElement("table");
    
    for (let i = 0; i < rowsAmount; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < colsAmount; j++) {
            //create cell
            const td = document.createElement("td");
            //add styling
            td.style.width = "20px";
            td.style.height = "20px";
            td.style.background = "ivory"
            //at the begining opacity is 30%
            td.style.opacity = "0.3";
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    table.style.borderCollapse = "collapse";
    return table;
}

/**
 * Function that shows popup window with question
 * @param {object} question 
 * @returns answer
 * true - if user answered correctly, false - otherwise
 */
function askQuestion(question) {
    //get the answer
    let answer = window.confirm(question.question + "\nPress 'OK' if 'Yes' and 'Cancel' if 'No'!");
    //check if answer correct and return the result
    return answer == question.answer;
}

/**
 * Function that colors the part of the picture
 * @param {object} picPart 
 */
function colorPicture(picPart) {
    //take our table where the picture is hidden
    let table = document.querySelector("table");
    //loop through all points in current picture part
    for (const point of picPart.points) {
        //find cell by indexes that mentioned in point and change the background color to the color of current part
        table.childNodes[point[0]].childNodes[point[1]].style.background = picPart.color;
    }
}


/**
 * Technic function to add the delay in js workflow
 * @param {number} milliseconds 
 */
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    //do the loop until desired amount of millisecond passed
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
