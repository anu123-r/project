setInterval(() => {
    d=new Date();
    h= d.getHours();
    m= d.getMinutes();
    s= d.getSeconds();
    htime=30*h + m/2;
    mtime=6*m;
    stime=6*s;
    hour.style.transform= `rotate(${htime}deg)`;
    minutes.style.transform=` rotate(${mtime}deg)`;
    seconds.style.transform=` rotate(${stime}deg)`; 
   }, 1000)
   
   function updateDigitalClock() {
       const now = new Date();
       const hours = String(now.getHours()).padStart(2, '0');
       const minutes = String(now.getMinutes()).padStart(2, '0');
       const seconds = String(now.getSeconds()).padStart(2, '0');
       const digitalClock = document.getElementById('digital-clock');
       digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
   }
   
   
   setInterval(updateDigitalClock, 1000);
   updateDigitalClock(); 
