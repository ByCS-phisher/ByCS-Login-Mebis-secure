document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("button-do-log-in");

  loginButton.addEventListener("click", (event) => {
    event.preventDefault(); // Sicherheitshalber
    showPhishingWarning();
  });
});

function showPhishingWarning() {
  document.getElementById("phishing-overlay").style.display = "flex";
}

function startPdfDownload(url, filename = 'Arbeitsblatt.pdf') {
  // Erstellt ein temporäres Link-Element
  const link = document.createElement('a');
  link.href = url;
  
  // WICHTIG: Das 'download'-Attribut weist den Browser an,
  // die Datei herunterzuladen und diesen Namen zu verwenden.
  link.setAttribute('download', filename); 
  
  // Fügt das Element kurz in den DOM ein (nötig, damit .click() funktioniert)
  document.body.appendChild(link);
  link.click();
  
  // Entfernt das Element wieder
  document.body.removeChild(link);
}