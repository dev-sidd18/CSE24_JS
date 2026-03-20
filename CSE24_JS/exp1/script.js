function createInputs(){

    let n = document.getElementById("subjects").value;

    let container = document.getElementById("marksInput");
    container.innerHTML = "";

    for(let i = 0; i < n; i++){
        container.innerHTML += 
        "Subject " + (i+1) + " Marks: <input type='number' class='mark'><br><br>";
    }
}

function calculateResult(){

    let marks = document.getElementsByClassName("mark");

    let total = 0;

    for(let i = 0; i < marks.length; i++){
        total += parseFloat(marks[i].value);
    }

    let avg = total / marks.length;

    let grade;

    if(avg >= 90) grade = "A+";
    else if(avg >= 75) grade = "A";
    else if(avg >= 60) grade = "B";
    else if(avg >= 40) grade = "C";
    else grade = "F";

    let result = avg >= 40 ? "Pass" : "Fail";

    document.getElementById("result").innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average: " + avg + "<br>" +
    "Grade: " + grade + "<br>" +
    "Result: " + result;
}