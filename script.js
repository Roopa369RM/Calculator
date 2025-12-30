const display= document.getElementById("display");
    function addToDisplay(input){
        display.value +=input;
    }
    function calculate(){
        try{
            display.value =eval(display.value);
        }catch(error){
            display.value="error";

        }
    }
    function clear1(){
       display.value ="";
    }
    function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
    