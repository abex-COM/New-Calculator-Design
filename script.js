const input = document.querySelector("input");
const clear = document.querySelector(".clear");
const deleteAll = document.querySelector(".allClear");
const result = document.querySelector(".results");
const display = document.querySelector(".display");


result.addEventListener(("click"), () => {
    display.textContent =eval(input.value);

})
clear.addEventListener(("click"), () => {
    const currentValue = input.value;
    input.value = currentValue.slice(0, -1);
})
deleteAll.addEventListener(("click"), () => {
    input.value = '';
    display.textContent='0'
})
 function calculate(value) {
     input.value += value;
 }

