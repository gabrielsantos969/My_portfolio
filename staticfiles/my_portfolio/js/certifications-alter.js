
/* Functions Study */
function showStudy() {
    var id = document.getElementById("study");
    id.classList.add('active');
    id.classList.remove('desactive');
}

function hideStudy() {
    var id = document.getElementById("study");
    id.classList.add('desactive');
    id.classList.remove('active');
}

/* Functions Python */
function showPy1() {
    document.getElementById("py1").style.display = "flex"

}

function hidePy1() {
    document.getElementById("py1").style.display = "none"
   
}

function showPy2() {
    document.getElementById("py2").style.display = "flex";
}

function hidePy2() {
    document.getElementById("py2").style.display = "none";
}

/* Functions TypeScript */
function showTs1() {
    document.getElementById("ts1").style.display = "flex";
}

function hideTs1() {
    document.getElementById("ts1").style.display = "none";
}