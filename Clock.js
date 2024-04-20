

let a1 = document.querySelector(".nav1");
let a2 = document.querySelector(".nav2");
let a3 = document.querySelector(".nav3");
let a4 = document.querySelector(".nav4");
let a5 = document.querySelector(".u1right");
let a6 = document.querySelector(".card");
let count = 0;
let grp = document.querySelector(".grp2");



let sect = document.querySelector(".sec");


function a() {
    // sect.style.backgroundColor = "blue";     
    sect.style.transform = `translate(-0%)`;
}
a1.addEventListener('click', a);

function aa() {
    // sect.style.backgroundColor = "blue";     
    sect.style.transform = `translate(-25%)`;
}
a2.addEventListener('click', aa);

function ab() {
    // sect.style.backgroundColor = "blue";     
    sect.style.transform = `translate(-50%)`;
}
a3.addEventListener('click', ab);

function ac() {
    // sect.style.backgroundColor = "blue";     
    sect.style.transform = `translate(-75%)`;
}
a4.addEventListener('click', ac);



// 
let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ampm = document.querySelector("#ampm");
let ti = document.querySelector(".ti");
let btn = document.querySelector(".btn");
let lbtn = document.querySelector(".lbtn");


let ringtone = document.querySelector("#audi");
let alarmTime;

let time;


// let cardtime = document.querySelector(".cardtime");
for (let i = 1; i <= 24; i++) {
    if (i < 10) {
        hrs.insertAdjacentHTML("beforeend", `<option value="${i}">${"0" + i}</option>`);
    }
    else {
        hrs.insertAdjacentHTML("beforeend", `<option value="${i}">${i}</option>`);
    }
}
for (let i = 0; i <= 59; i++) {
    if (i < 10) {
        min.insertAdjacentHTML("beforeend", `<option value="${i}">${"0" + i}</option>`);
    }
    else {
        min.insertAdjacentHTML("beforeend", `<option value="${i}">${i}</option>`);
    }
}
for (let i = 0; i <= 59; i++) {
    if (i < 10) {
        sec.insertAdjacentHTML("beforeend", `<option value="${i}">${"0" + i}</option>`);
    }
    else {
        sec.insertAdjacentHTML("beforeend", `<option value="${i}">${i}</option>`);
    }
}
// for(let i=0; i<=2; i++){
ampm.insertAdjacentHTML("beforeend", `<option value="AM">AM</option>`);
ampm.insertAdjacentHTML("beforeend", `<option value="PM">PM</option>`);
// }


setInterval(() => {
    let tim = new Date(),
        h = tim.getHours(),
        m = tim.getMinutes(),
        s = tim.getSeconds(),
        ampm = "AM"

    if (h > 12) {
        ampm = "PM";
    }
    let di = h - 12;
    if (h > 12) {
        h = di;
    }
    h < 10 ? h = "0" + h : h = h;
    m < 10 ? m = "0" + m : m = m;

    s < 10 ? s = "0" + s : s = s;



    ti.textContent = `${h}:${m}:${s} ${ampm}`;

    // console.log(alarmTime);
    if (time == `${h}:${m}:${s} ${ampm}`) {
        // console.log("ringing......");
        // alert("ringing.....");
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);


let d1 = `Alarm ON| Ring once | Wake Up`;


function setAlarm() {
    let hr = hrs.value;
    hr < 10 ? hr = "0" + hr : hr = hr;
    let mi = min.value;
    mi < 10 ? mi = "0" + mi : mi = mi;

    se = sec.value;
    se < 10 ? se = "0" + se : se = se;


    //  time = `${hrs.value}:${min.value}:${sec.value} ${ampm.value}`
    time = `${hr}:${mi}:${se} ${ampm.value}`


    // console.log(time);
    // cardtime.textContent = time;



    let doc = `<div class="cards">
<div class="lef">
    <div class="grp1">
        <h2 class="cardtime">${time}</h2>
    </div>
    <h5 class="grp2">${d1}</h5>
</div>
<div class="rig">
    <label class="switch">
        <input type="checkbox" id="toggleSwitch">
        <span class="slider"></span>
      </label>   
</div>
</div>`;


    if (time > alarmTime) {
        a5.remove(doc);
    }
    a5.insertAdjacentHTML("beforeend", doc);
    // console.log(doc);



    if (count < 0) {
        count++;
    }
    else {
        btn.removeEventListener('click', setAlarm);
        // alert("Alarm limit Excedes");
    }



    document.getElementById('toggleSwitch').addEventListener('change', function () {
        if (this.checked) {
            // Code to execute when toggled on
            //   console.log("on");
            grp.textContent = `Alarm OFF| Ring once | Wake Up`;
            ringtone.pause();
        } else {
            // Code to execute when toggled off
            // console.log("off");
            grp.textContent = `Alarm ON | Ring once | Wake Up`;
        }
    });
}

function rem() {
    // console.log("delete");
    ringtone.pause();
    document.querySelector(".cards").remove(document.querySelector(".card"));
}
btn.addEventListener('click', setAlarm);

lbtn.addEventListener('click', rem);




// Timer
function Timer() {
    let c = document.querySelector(".hrsss");
    let b = document.querySelector(".minnn");
    let a = document.querySelector(".seccc");
    let t = document.querySelector(".timerrr");
    let rese = document.querySelector(".rese");



    let sec = parseInt(prompt("Enter the Timer time: Seconds"), 10);
    let min = parseInt(prompt("Enter the Timer time: Minutes"), 10);
    let hrs = parseInt(prompt("Enter the Timer time: Hours"), 10);

    // Validate input
    // if (sec < 0 || sec > 59 || isNaN(sec)) {
    //     alert("Set seconds properly.");
    //     sec = 0;
    // }
    // if (min < 0 || min > 59 || isNaN(min)) {
    //     alert("Set minutes properly.");
    //     min = 0;
    // }
    // if (hrs < 0 || isNaN(hrs)) {
    //     alert("Set hours properly.");
    //     hrs = 0;
    // }

    if (sec < 0 || sec > 59 || isNaN(sec)|| min < 0 || min > 59 || isNaN(min)|| hrs < 0 || isNaN(hrs)) {
        alert("Set Timer properly.");
        sec = 0;
        min = 0;
        hrs = 0;
    }



    c.innerHTML = hrs;
    b.innerHTML = min;
    a.innerHTML = sec;

    let interval = setInterval(() => {
        if (sec > 0) {
            sec--;
        } else if (min > 0) {
            sec = 59;
            min--;
        } else if (hrs > 0) {
            sec = 59;
            min = 59;
            hrs--;
        }

        a.innerHTML = sec;
        b.innerHTML = min;
        c.innerHTML = hrs;

        // Stop the timer when all are zero
        if (hrs === 0 && min === 0 && sec === 0) {
            clearInterval(interval);
            alert("Time's up!");
        }
    }, 1000);



    rese.addEventListener('click', () => {
        clearInterval(interval);
        c.innerHTML = 0;
        b.innerHTML = 0;
        a.innerHTML = 0;
    })
}




// Stopwatch
let gh = document.querySelector(".gh");
let mii = document.querySelector(".mii");
let seee = document.querySelector(".seee");
let butoon = document.querySelector(".brn");
// console.log(butoon);
// let prompt1 = prompt("Enter Hours: ");
// let prompt2 = prompt("Enter minutes: ");
// let prompt3 = prompt("Enter seconds: ");
let ghaa = 0;
let miii = 0;
let see = 0;
gh.innerHTML = ghaa + " :";
mii.innerHTML = miii + " :";
seee.innerHTML = see;
function startwatch() {
    let ghaa = 0;
    let miii = 0;
    let see = 0;

    let watchinterval = setInterval(() => {
        see++;
        seee.innerHTML = see;
        if (see == 59 && miii < 59) {
            see = 0;
            miii++;
            mii.innerHTML = miii;
        }
        else if (miii == 59 && see == 59) {
            see = 0;
            miii = 0;
            ghaa++;
            seee.innerHTML = see;
            mii.innerHTML = miii;
            gh.innerHTML = ghaa;
        }
    }, 1000);
    // butoon.innerHTML = "Stop";
    if (butoon.innerHTML == "Stop") {
        butoon.addEventListener('click', function () {
            clearInterval(watchinterval);
        })
    }
}




// World clock
let stopwatch = document.querySelector(".stopwatch");
setInterval(() => {
    let tarikh = new Date();
    // console.log(tarikh);
    let tz1 = document.querySelector(".tz1");
    let tz2 = document.querySelector(".tz2");
    let tz3 = document.querySelector(".tz3");
    function addzone() {
        let country = prompt("Enter Country Name: ");
        let zone = prompt("Enter timezone: ");
        let child = document.createElement("div");
        child.className = "head";
        child.innerHTML = `${country} :`;
        stopwatch.appendChild(child);
        let child1 = document.createElement("div");
        child1.className = "ta";
        child1.innerHTML = tarikh.toLocaleString('en', { timeZone: `${zone}` });
        child.appendChild(child1);
    }

    tz1.innerHTML = tarikh.toLocaleString('en', { timeZone: `Asia/Kolkata` });
    tz2.innerHTML = tarikh.toLocaleString('en', { timeZone: `America/New_York` });
    tz3.innerHTML = tarikh.toLocaleString('en', { timeZone: `Asia/Shanghai` });
}, 1000);

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


