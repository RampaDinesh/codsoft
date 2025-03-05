let display_output = document.querySelector(".result");

document.querySelectorAll(".btns").forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let buttonText = event.target.innerHTML;

        if (buttonText === "=") {
            result();
        } else if (buttonText === "c") {
            display_output.value = "";
        } else {
            display_output.value += buttonText;
        }
    });
});

const result = () => {
    try {
        let evaluation = eval(display_output.value);
        display_output.value = evaluation;
    } catch (error) {
        display_output.value = "error";
    }
};
