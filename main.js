const display = document.querySelector('#display');
const bnts = document.querySelectorAll('.btn');

bnts.forEach((button) => {
    button.addEventListener("click", () => {
        const pressButton = button.textContent;

        if (button.id == 'c') {
            display.textContent = "0";
            return;
        }
        if (button.id == "delete") {
            display.textContent = display.textContent.slice(0, -1);
            return;
        }
        if (button.id === "equals") {
            display.textContent = eval(display.textContent);
            return;
        }
        
        if (display.textContent === "0") {
            display.textContent = pressButton;
        }
        else{
            display.textContent += pressButton;
        }
        
    })
})