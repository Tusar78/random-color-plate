const refreshBtn = document.querySelector(".refresh-btn");
const colors = document.querySelector(".colors");

const maxPalette = 12;

const generateColor = () => {
  colors.innerHTML = "";
  for (let i = 0; i < maxPalette; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    let color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `
      <div class="color__box" style="background-color: ${randomHex}"></div>
      <span class="color__hex">${randomHex}</span>
    `;

    color.addEventListener('click', () => copyColor(color, randomHex));
    colors.appendChild(color);
  }
};

generateColor();

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector('.color__hex');
  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerHTML = 'Copied';
    setTimeout(() => colorElement.innerHTML = hexVal, 1000);
  })
}

refreshBtn.addEventListener("click", generateColor);
