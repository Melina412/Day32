const zeichentrennung = () => {
  const string = document.getElementById("inputZeichenkette").value; //   1. value Zeichenkette abrufen
  const substring = document.getElementById("inputTrennstelle").value; //   2. value Trennstelle abrufen
  const included = string.includes(substring); //   3. Ist Stelle in Zeichenkette vorhanden?
  const index = string.indexOf(substring); //   4. Index des Substrings
  const len = substring.length; //   5. Länge des Substrings

  //   6. Auwahl davor/danach
  const radio = () => {
    if (radioDavor.checked) {
      return "davor";
    } else if (radioDanach.checked) {
      return "danach";
    }
  };
  const auswahl = radio();

  //   7. Slicing
  const slice = () => {
    if (auswahl === "davor") {
      let substring_1 = string.slice(0, index);
      let substring_2 = string.slice(index);
      return `<p>${substring_1}</p><p>${substring_2}</p> `;
    } else if (auswahl === "danach") {
      let substring_1 = string.slice(0, index + len);
      let substring_2 = string.slice(index + len);
      return `<p>${substring_1}</p><p>${substring_2}</p> `;
    } else {
      return "Keine Auswahl getroffen";
    }
  };

  // 8. Output
  if (included === true) {
    slice();
    document.getElementById("output").innerHTML = slice();
  } else {
    document.getElementById("output").innerHTML =
      "Teilzeichenkette nicht enthalten";
  }
};
