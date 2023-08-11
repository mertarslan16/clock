const myName = document.querySelector('#name')

const findName = () =>{
    var name = prompt("Bir değer girin:"); 
    return name;
}

myName.innerHTML = findName()


function showTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    
    var currentTime = hours + ":" + minutes + ":" + seconds;

  
    document.getElementById("myClock").innerHTML = currentTime;
}


setInterval(showTime, 1000);