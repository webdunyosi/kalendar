let monthNameEl = document.querySelector("h2")
let dayNameEl = document.querySelector("h3")
let dayNumEl = document.querySelector("h1")
let yearEl = document.querySelector("h4")

const date = new Date()

monthNameEl.innerText = date.toLocaleString("en-EN", {
  month: "long",
})

dayNameEl.innerText = date.toLocaleString("en-EN", {
  weekday: "long",
})

dayNumEl.innerText = date.getDate()

yearEl.innerText = date.getFullYear()