function checkProgress() {
    let name= document.getElementById("studentName").value;
    let G1= number(document.getElementById("G1").value);
    let G2= number(document.getElementById("G2").value);
    let G3= number(document.getElementById("G3").value);

    let average= (G1 + G2 + G3) / 3;
let result= document.getElementById("result");


   if (average >= 70){
        result.textContent = 'Congratulations ${name}, you passed!';
        result.style.color ="green";
    } else {
        result.textContent = 'Keep practicing ${name}.';
        result.style.color = "red";
    }
}