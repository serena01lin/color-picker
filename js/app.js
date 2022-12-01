const input_color = document.getElementById("inputColor")
const btn = document.getElementById("btn")
const hexadecimal = document.getElementById("hexadecimal")
const card_color = document.getElementById("cardColor")

btn = addEventListener("click", () => {
    hexadecimal.textContent = input_color.value;
    card_color.style.backgroundColor = input_color.value;
})