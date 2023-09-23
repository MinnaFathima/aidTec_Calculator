var screen = document.getElementById('screen');

function btnClick(value){
    screen.value += value;

}
function clearScreen(){
    screen.value = "";
}
function erase(){
    var currentValue = screen.value;
    if(currentValue.length > 0){
        screen.value = currentValue.slice(0,-1);
    }
    
}
function findResult(){
    var result = eval(screen.value)
    screen.value = result;
}