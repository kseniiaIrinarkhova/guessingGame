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

let questionWindow;
setTimeout(() => {
    questionWindow = window.confirm("question");
}, 1000);









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
            td.style.background = "ivory";
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    table.style.borderCollapse = "collapse";
    return table;
}

const questions = [
    {
        question: "1",
        answer: true
    },
    {
        question: "2",
        answer: true
    },
    {
        question: "3",
        answer: false
    },
    {
        question: "4",
        answer: true
    },
    {
        question: "5",
        answer: true
    }
];

const pictureParts = [
    {
        id: 5,
        points: [[1, 1], [1, 2], [1, 7], [1, 8], [1, 9], [2, 1], [2, 3], [2, 6], [2, 9], [3, 1], [3, 4], [3, 5], [3, 9], [4, 1], [4, 9], [5, 1], [5, 9], [6, 1], [6, 3], [6, 6], [6, 9], [6, 13], [6, 14], [7, 1], [7, 3], [7, 6], [7, 9], [7, 12], [7, 15], [8, 1], [8, 9], [8, 10], [8, 12], [8, 14], [8, 15], [9, 2], [9, 8], [9, 11], [9, 14], [10, 3], [10, 12], [10, 13], [11, 3], [11, 12], [12, 3], [12, 12], [13, 3], [13, 8], [13, 12], [14, 3], [14, 4], [14, 5], [14, 6], [14, 7], [14, 9], [14, 10], [14, 11], [14, 12]],
        color: "black"
    },
    {
        id: 4,
        points: [[4, 2], [4, 6], [4, 7], [4, 8], [5, 2], [5, 5], [5, 6], [5, 7], [5, 8], [6, 5], [6, 7], [6, 8], [7, 7], [7, 8], [7, 13], [7, 14], [8, 13], [9, 9], [9, 10], [9, 12], [9, 13], [10, 11]],
        color: "#B5862F"
    },
    {
        id: 2,
        points: [[2, 2], [2, 7], [2, 8], [2, 3], [2, 7], [2, 8]],
        color: "#EECDB2"
    },
    {
        id: 3,
        points: [[3, 3], [3, 6], [4, 3], [4, 5]],
        color: "#616161"
    },
    {
        id: 1,
        points: [[8, 4]],
        color: "#F69988"
    },
];