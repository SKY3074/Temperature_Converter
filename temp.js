let kelvinBox = document.querySelector("#kelvin");
let CelciusBox = document.querySelector("#celcius");
let fahrenBox  = document.querySelector("#fahren");
let container1 = document.querySelector(".container")


function kelvinConverter(kelvin){
     CelciusBox.value = (kelvin - 273.1).toFixed(1);
     fahrenBox.value = ((kelvin *  (9/5))- 459.67).toFixed(1);
     transferBackground((kelvin - 273.1).toFixed(0));
}


function celciusConverter(celcius){
    kelvinBox.value = (celcius + 273.1).toFixed(1);
    fahrenBox.value = ((celcius * 1.8) + 32).toFixed(1);
    transferBackground(celcius.toFixed(0));
}


function fahrenConverter(fahren){
    kelvinBox.value = ((fahren + 459.67) * (5/9)).toFixed(1);
    CelciusBox.value = ((fahren - 32) * (5/9)).toFixed(1);
    transferBackground((fahren - 32 ) * (5/9).toFixed(0));
    
}


function transferBackground(celcius){
    if(celcius > -200 && celcius <= 0){
        document.body.style.background ="#F5EE12";
        container1.style.borderRadius =" 20% 5% 20% 5%";
    }  else   if(celcius == 0 ){
        document.body.style.background ="#bff161"
       
    }else   if(celcius > 0 && celcius <=50){
        document.body.style.background ="#bff161"
    } else if(celcius > 50 && celcius <=60) {
        document.body.style.background ="#f32b4c";
        container1.style.borderRadius =" 20% 5% 20% 5%";
    } else if(celcius > 60 && celcius <=70) {
        document.body.style.backgroundColor ="#20B2AA"
    } else if(celcius > 70 && celcius <=80) {
        document.body.style.backgroundColor ="#BA55D3";
      
    } else if(celcius > 80 && celcius <=90) {
        document.body.style.backgroundColor ="#FFA500"
    } else if(celcius > 90 && celcius <=100) {
        document.body.style.backgroundColor ="#c2b2f0"
    } 
}