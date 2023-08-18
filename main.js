function convertTime() {
  const jam = parseInt(document.getElementById("jam").value);
  let menit = parseInt(document.getElementById("menit").value);
  let detik = parseInt(document.getElementById("detik").value);

  let convertJam = jam * 3600;
  let convertMenit = menit * 60;
  let convertResult = convertJam + convertMenit + detik;

  document.getElementById("totalDetik").innerText =
    "Detik Clip yang dibutuhkan : " + convertResult;
}

function darkMode() {
  document.getElementById;
}

