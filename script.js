function calculateAge() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if (day && month && year) {
        let birthDate = new Date(year, month - 1, day);
        let today = new Date();
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        document.querySelector(".result").innerText = `Você tem ${ageYears} anos, ${ageMonths} meses e ${ageDays} dias.`;
    } else {
        document.querySelector(".result").innerText = "Por favor, preencha todos os campos.";
    }
}
