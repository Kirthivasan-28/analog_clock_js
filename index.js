setInterval(()=>{
    d= new Date();
    hr=d.getHours();
    console.log(hr)
    min=d.getMinutes();
    console.log(min)
    sec=d.getSeconds();
    console.log(sec)
    hr_rotation=30*hr+min/2;
    min_rotation=6*min;
    sec_rotation=6*sec;
    // console.log(hr_rotation)
    // console.log(min_rotation)
    // console.log(sec_rotation)

    hour.style.transform=`rotate(${hr_rotation}deg)`;
    minutes.style.transform=`rotate(${min_rotation}deg)`;
    seconds.style.transform=`rotate(${sec_rotation}deg)`;
},1000);