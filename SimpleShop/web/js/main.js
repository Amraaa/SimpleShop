const ukupnoElement = document.getElementById("ukupno")
const brojArtikalaElement = document.getElementById("broj-artikala")
const naziviElementi = document.querySelectorAll("td:nth-child(2)")
const cijenaElementi = document.querySelectorAll(".cijena")
const kolicineElementi = document.querySelectorAll("td:nth-child(4) input")

function azuriraj() {
  let ukupno = 0
  let brojArtikala = 0
  let poruka = "Narucili ste: \n"
  for (let i = 0; i < cijeneElementi.length; i++) {
    const kolicina = Number(kolicineElementi[i].value)
    if (kolicina) {
      const naziv = naziviElementi[i].innerText.trim()
      const cijena = Number(cijenaElementi[i].innerText)
      ukupno += cijena * kolicina
      brojArtikala += kolicina
      poruka += `- ${naziv} Komada: ${kolicina}, po cijeni od ${cijena} euro. \n`
    }
  }
  console.log(poruka);
  brojArtikalaElement.innerText = brojArtikala
  brojArtikalaElement.style.display = brojArtikala ? 'flex' : 'none'
  ukupnoElement.innerText = ukupno.toFixed(2)
  localStorage.ukupno = ukupno.toFixed(2)
  localStorage.poruka = poruka
}

for (let i = 0; i < cijenaElementi.length; i++) {
  kolicineElementi[i].addEventListener("input", azuriraj)
}

azuriraj()

