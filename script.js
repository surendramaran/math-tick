const number = document.getElementById("number")
const title = document.getElementById("title")

const chapter = {
    2: "Number System",
    3: "Percentage",
    4: "Simple Interest and Compound Interest",
    5: "Profit, Loss & Discount",
    6: "Average",
    7: "Ratio & Proportion",
    8: "Time & Work",
    9: "Time, Speed & Distance",
    10: "Basic of Algebra",
    11: "Equations",
    12: "Sequences & Series",
    13: "Funtion",
    14: "Graphs ang Maxima Minima",
    15: "Logarithm",
    16: "Permutation & Combination",
    17: "Probability",
    18: "Geometry",
    19: "Mensuration",
    20: "Co-Ordinate Geometry",
    21: "Set Theory",
    23: "Miscellaneous"
};

let process = {
    "foundations": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 23],
    "moderate": [2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23],
    "advanced": [2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 16, 17, 18, 20, 21, 23],
    "previous": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23]
}

if (localStorage.hasOwnProperty('process')) {
    process = JSON.parse(localStorage.getItem('process'))
} else {
    localStorage.setItem('process', JSON.stringify(process));
}

function getRandom() {
    const obj = JSON.parse(localStorage.getItem('process'));
    let item;
    if (obj.foundations.length > 0) {
        item = obj.foundations[Math.floor(Math.random() * obj.foundations.length)];
    } else if (obj.moderate.length > 0) {
        item = obj.moderate[Math.floor(Math.random() * obj.moderate.length)];
    } else if (obj.advanced.length > 0) {
        item = obj.advanced[Math.floor(Math.random() * obj.advanced.length)];
    } else if (obj.previous.length > 0) {
        item = obj.previous[Math.floor(Math.random() * obj.previous.length)];
    }
    number.innerText = item;
    title.innerText = chapter[item];
    console.log(process)
}

function complete() {
    const idx = parseInt(number.innerText);
    const obj = JSON.parse(localStorage.getItem('process'));
    if (obj.foundations.length > 0) {
        const index = process.foundations.indexOf(idx);
        if (index > -1) {
            process.foundations.splice(index, 1);
        }
        localStorage.setItem('process', JSON.stringify(process));
    } else if (obj.moderate.length > 0) {
        const index = process.moderate.indexOf(idx);
        if (index > -1) {
            process.moderate.splice(index, 1);
        }
        localStorage.setItem('process', JSON.stringify(process));
    } else if (obj.advanced.length > 0) {
        const index = process.advanced.indexOf(idx);
        if (index > -1) {
            process.advanced.splice(index, 1);
        }
        localStorage.setItem('process', JSON.stringify(process));
    } else if (obj.previous.length > 0) {
        const index = process.previous.indexOf(idx);
        if (index > -1) {
            process.previous.splice(index, 1);
        }
        localStorage.setItem('process', JSON.stringify(process));
    }
    console.log(process)
    number.innerText = '';
    title.innerText = '';
}