let first = 0;
let plus = false;
let minus = false;
let multiply = false;
let divide = false;
let result = "";
let flag = false;

let input = document.getElementById("input");

function operation(keycode){
    if(keycode >= 0 && keycode <= 9){
        if(first == 0){
            input.textContent = input.textContent + "" + keycode;
            result = input.textContent;
        }
        else{
            if(flag){
                input.textContent = "";
                flag = false;
            }
            input.textContent = input.textContent + "" + keycode;
            first = input.textContent;
        }
    }
    else if(keycode == "clear"){
        input.textContent = "";
        first = 0;
        result = "";
    }
    else if(keycode == "equal"){
        if(plus == true){
            result = (result) + (first);
        }
        else if(minus == true){
            result -= first;
        }
        else if(multiply == true){
            result *= first;
        }
        else if(divide == true){
            result /= first;
        }
        input.textContent = result + "";
    }
    else{
        first = -1;
        plus = false;
        minus = false;
        multiply = false;
        divide = false;
        switch(keycode){
            case "plus":
                plus = true;
                input.textContent = "+";
                break;
            case "minus":
                minus = true;
                input.textContent = "-";
                break;
            case "multiply":
                multiply = true;
                input.textContent = "*";
                break;
            case "divide":
                divide = true;
                input.textContent = "/";
                break;
        }
        flag = true;
    }
}