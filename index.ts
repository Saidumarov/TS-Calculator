var display: HTMLElement | null = document.getElementById("display");
const buttons: HTMLElement[] = Array.from(
  document.getElementsByClassName("button")
);

buttons.forEach((button: HTMLElement) => {
  button.addEventListener("click", (e: Event) => {
    if (!(e.target instanceof HTMLElement)) return;

    switch (e.target.innerText) {
      case "C":
        if (display) {
          display.innerText = "";
        }
        break;

      case "=":
        if (display) {
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Error";
          }
        }
        break;

      case "←":
        if (display && display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      default:
        if (display) {
          display.innerText += e.target.innerText;
        }
    }
  });
});
