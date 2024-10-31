document.getElementById("formular-programare").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne trimiterea efectivă a formularului
    
    // Simulare de trimitere - afișăm un mesaj de confirmare
    alert("Cererea de programare a fost trimisă! Vă vom contacta în curând pentru confirmare.");
    
    // Resetează formularul după trimitere
    event.target.reset();
});
document.getElementById("formular-programare").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obține datele din formular
    const nume = document.getElementById("nume").value;
    const telefon = document.getElementById("telefon").value;
    const email = document.getElementById("email").value;
    const data = document.getElementById("data").value;
    const observatii = document.getElementById("observatii").value;

    // Trimite datele către server
    fetch("http://localhost:3000/programare", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nume, telefon, email, data, observatii })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Programarea a fost înregistrată cu succes.") {
            alert(data.message);
            document.getElementById("formular-programare").reset();
        } else {
            alert(data.message); // Mesaj de eroare dacă data este deja rezervată
        }
    })
    .catch(error => console.error("Eroare:", error));
});
