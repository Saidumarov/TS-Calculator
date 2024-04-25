var display = document.getElementById("display");
var buttons = Array.from(document.getElementsByClassName("button"));
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (!(e.target instanceof HTMLElement))
            return;
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
                    }
                    catch (_a) {
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
