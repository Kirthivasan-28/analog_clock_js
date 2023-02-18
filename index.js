setInterval(showTime, 1000)

function showTime(){
    let time= new Date();
    let hour = time.getHours();
    let minutes= time.getMinutes();
    let seconds= time.getSeconds();
    am_pm='AM';

    if(hour>=12){
        hour=hour-12;
        am_pm="PM"
    }
    if(hour==0){
        hour=12
        am_pm="AM"
    }
    hour= hour<10?'0'+hour:hour;
    minutes= minutes<10?'0'+minutes:minutes;
    seconds= seconds<10?'0'+seconds:seconds;
    var timer=document.getElementById('clock')
    timer.innerHTML=hour+':'+minutes+':'+seconds+am_pm
    console.log(timer)
    console.log(hour, minutes, seconds);
}