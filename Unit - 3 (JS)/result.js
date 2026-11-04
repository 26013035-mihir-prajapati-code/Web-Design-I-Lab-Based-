function calculateResult() {
    let m1 = Number(document.getElementById("s1").value);
    let m2 = Number(document.getElementById("s2").value);
    let m3 = Number(document.getElementById("s3").value);

    let total = m1 + m2 + m3;
    let percentage = total / 3;
    let result = "";

    if (m1 >= 40 && m2 >= 40 && m3 >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    document.getElementById("output").innerHTML = "Total Marks: " + total + "<br>Percentage: " + percentage + "%<br>Result: " + result;
}