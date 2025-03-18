var JMsec = 0;
var Jsec = 0;
var Jmin = 0;
var Stop;
var isrunning = false


// add leading ("0")
function formatTime(num){
    if(num < 10){
        return "0" + num
    }

    else{
        return num
    }
}

// play and pause button function 
function togglestartpause(){

    geticon = document.getElementById("playicon")

    // stop button 
    if(isrunning){
        clearInterval(Stop)
        geticon.className = "fa-solid fa-play"

    }

    // play button 
    else{

            Stop = setInterval(function(){
               JMsec++
               document.getElementById("Msec").innerHTML = formatTime(JMsec)
           
               if(JMsec === 100){
                   Jsec++
                   document.getElementById("sec").innerHTML = formatTime(Jsec)
                   JMsec = 0
               }
           
               else if(Jsec === 60){
                   Jmin++
                   document.getElementById("min").innerHTML = formatTime(Jmin)
                   Jsec = 0
               }
           }, 10)

           geticon.className = "fa-solid fa-pause"

       
       }
       
       isrunning = !isrunning
       

    }




// reset 
function reset(){

    geticon.className = "fa-solid fa-play"
    clearInterval(Stop)
    JMsec = 0
    Jsec = 0 
    Jmin = 0

    document.getElementById("Msec").innerHTML = "00"
    document.getElementById("sec").innerHTML  = "00"
    document.getElementById("min").innerHTML = "00"
}