var JMsec = 0;
var Jsec = 0;
var Jmin = 0;
var interval;
var isrunning = false;

function toggleplaystopbtn(){
    var getMsec = document.getElementById("Msec");
    var getsec = document.getElementById("sec");
    var getmin = document.getElementById("min");
    var getcolon = document.getElementById("colon");
    var getplaybtn = document.getElementById("play");
    var getstopbtn = document.getElementById("stop");
    var getresetbtn = document.getElementById("reset");
    if(!isrunning){
        interval = setInterval(function(){
            JMsec++
            getMsec.innerHTML = JMsec;
    if(JMsec === 99){
        Jsec++
        getsec.innerHTML = Jsec;
        JMsec = 0
    }
    if(Jsec === 60){
        Jmin++
        getmin.innerHTML = Jmin;
        Jsec = 0

        // UI Design
        getmin.style.display = "inline-block"
        getcolon.style.display = "inline-block"
    }

        }, 10)

        // Ui Design
        getplaybtn.style.display = "none";
        getstopbtn.style.display = "inline-block";
        getstopbtn.style.backgroundColor = "#c7dbff"
        getresetbtn.style.display = "inline-block"
        getresetbtn.style.backgroundColor = "#c7dbff"
        document.body.style.backgroundColor = "#e5edff"
        

        isrunning = true

    }else{
        clearInterval(interval)

        // UI Design
        getplaybtn.style.display = "inline-block"
        getplaybtn.style.backgroundColor = "#EAC07A"
        getplaybtn.style.color = "black"
        getplaybtn.style.width = "300px"
        getstopbtn.style.display = "none"
        getresetbtn.style.backgroundColor = "#EAC07A"
        document.body.style.backgroundColor = "#ffeed9"
        isrunning = false
    }
}


function reset(){
    Jmin = 0;
    Jsec = 0;
    JMsec = 0;
    document.getElementById("min").innerHTML = Jmin
    document.getElementById("sec").innerHTML = "0"
    document.getElementById("Msec").innerHTML = "00"
    clearInterval(interval)
    isrunning = false

    // UI Design
    var getplaybtn = document.getElementById("play");
    var getstopbtn = document.getElementById("stop");
    var getresetbtn = document.getElementById("reset");
    var getcolon = document.getElementById("colon");
    var getmin = document.getElementById("min");
    getplaybtn.style.display = "inline-block";
    getplaybtn.style.width = "604px";
    getplaybtn.style.backgroundColor = "#0C58D0";
    getplaybtn.style.color = "white"
    getstopbtn.style.display = "none";
    getresetbtn.style.display = "none";
    getmin.style.display = "none"
    getcolon.style.display = "none"
    document.body.style.backgroundColor = "#e5edff"

    
}