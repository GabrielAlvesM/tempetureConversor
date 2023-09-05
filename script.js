document.querySelector('button#iBtn').onclick = function (){
        let temp;
        let celsius = document.querySelector('div input#iCelsius');
        let fahreinheit = document.querySelector('div input#iFahreinheit');
      

    if(celsius.checked){
        temp = document.querySelector('div #iNum').value;
        temp = Number(temp);
        temp = toCelsius(temp)
        document.getElementById("tempLabel").innerHTML = temp.toFixed(.1) + "°C"
    }
    else if(fahreinheit.checked){
        temp = document.querySelector('div #iNum').value;
        temp = Number(temp);
        temp = toFahreinheit(temp)
        document.getElementById("tempLabel").innerHTML = temp.toFixed(.1) + "°F"
    } 
    else{
        document.getElementById("tempLabel").innerHTML = "Select Unit"
    }
}

function toCelsius(temp){
    return (5/9) * (temp - 32);
} 

function toFahreinheit(temp){
    return temp * 9/5 + 32;
}