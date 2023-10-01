document.getElementById("dateInput").addEventListener("input", function(e) {
    const tarih = e.target.value;

    fetch("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
        .then(response => response.json())
        .then(data => {
            const veri = data[tarih];
            
            if (veri) {
                document.getElementById("dataRow").className = "bg-success";
                document.getElementById("tests").textContent = veri.totalTests;
                document.getElementById("patients").textContent = veri.patients;
                document.getElementById("deaths").textContent = veri.death;
            } else {
                document.getElementById("dataRow").className = "bg-danger";
                document.getElementById("tests").textContent = "veri bekleniyor";
                document.getElementById("patients").textContent = "veri bekleniyor";
                document.getElementById("deaths").textContent = "veri bekleniyor";
            }
        })
        .catch(error => console.log(error));
});