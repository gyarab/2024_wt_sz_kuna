

let karty = [
    {
        src: 'https://placecats.com/millie/100/100'
    },
    {
        src: 'https://placecats.com/bella/100/100'
    },
    {
        src: 'https://placecats.com/neo/100/100'
    }
]

let pole = [1, 1, 2, 2, 3, 3]

el = document.getElementById('pexeso')

el.innerHTML = ""

pole.forEach((prvek) => {
    const karta = document.createElement('img')
    karta.src = karty[prvek].src
    el.appendChild(karta)
})