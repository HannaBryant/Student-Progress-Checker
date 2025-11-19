function checkProgress() {
    let name = document.getElementById("studentName").value;
    let g1 = parseFloat(document.getElementById("g1").value);
    let g2 = parseFloat(document.getElementById("g2").value);
    let g3 = parseFloat(document.getElementById("g3").value);

    let result = document.getElementById("result");

    if (!name || isNaN(g1) || isNaN(g2) || isNaN(g3)) {
        result.textContent = "Please fill in all fields correctly.";
        result.style.color = "red";
        return;
    }

    let average = (g1 + g2 + g3) / 3;

    if (average >= 70) {
        result.textContent = `Congratulations ${name}, you passed!`;
        result.style.color = "green";
    } else {
        result.textContent = `Keep practicing ${name}.`;
        result.style.color = "red";
    }
}