window.addEventListener("load", () => {
  const rangeScale = Array.from(document.querySelectorAll(".custom-range"));

  for (let rangeInput of rangeScale) {
    rangeInput.addEventListener("input", renderBoxColor);
  }
});

function renderBoxColor() {
  const box = document.querySelector("#box");
  const redScale = document.querySelector("#redScale").value;
  const greenScale = document.querySelector("#greenScale").value;

  const blueScale = document.querySelector("#blueScale").value;

  box.style.background = `rgb(${redScale},${greenScale},${blueScale})`;

  document.querySelector("#redScaleValue").value = redScale;
  document.querySelector("#greenScaleValue").value = greenScale;
  document.querySelector("#blueScaleValue").value = blueScale;
}
