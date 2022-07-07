// function l(a){
//     console.log(a);
// }

// var date=new Date();
// console.log(date);

// var month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
// console.log(month[new Date().getMonth()]);

// var week=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var mon=new Date().getDay();
// var today=week[mon];
// console.log("Today is: "+today.slice(0,3));

// var day=new Date().getDay().toString;
// // console.log(typeof day)
// if (day==="saturday"|| day==="sunday"){
//         console.log("It's fun day");
// }else{
//     console.log("It's working day! ");
// }

// var days=new Date().getDate();
// // console.log(days)
// if(days<=15){
//     console.log("First fifteen days of Month");
// }else{
//     console.log("Last days of month");
// }

// console.log(new Date());
// var milliSeconds=new Date().getTime()
// console.log("Milli seconds since 1 january, 1970: "+milliSeconds);
// var minutes=milliSeconds/(1000*60)
// console.log("Minutes since 1 january, 1970: "+minutes);

// console.log(new Date().toString());

// var time = new Date().toString();
// console.log(time);
// var sl = time.slice(16, 18);
// console.log(sl);

// if(sl>=13 && sl<=23){
//     console.log("It's PM")
// }else if(sl>=1 && sl<=11){
//     console.log("It's AM")
// }else if(sl===12){
//     console.log("It's Noon");
// }else{
//     console.log("It's Midnight");
// }
// var d=new Date("5/7/2022")
// var last=d.setFullYear(2001)
// console.log(last);

// var lastDate=new Date("30/june/2022")
// l("Later Date: "+lastDate)

// var ramadanSince=new Date().getTime()-new Date("2/April/2022").getTime()
// var totalDays=Math.round((ramadanSince/1000)*(1/86400))
// // l(ramadanSince)
// l(totalDays+" days passed since 1st ramadan, 2022 ")

// var secondPassed= Math.round((new Date().getTime()-new  Date("1/jan/2022").getTime())/1000)
// l("On reference date: "+new Date()+", "+secondPassed+" seconds had passed since beginning of 2022.")

// const d = new Date();
// d.setHours(2);
// l(d)

// var currentDate=new Date()
// // l(currentDate)
// var oneHr=currentDate.setHours(17)
// // l(currentDate)
// l("Current date:"+currentDate+". 1hr ago: it was "+currentDate)

// var H=new Date()
// var currentDate=new Date().getHours()
// // l(currentDate)
// var hrAgo=currentDate-1
// // l(hrAgo)
// var d=new Date()
// var oneHr=d.setHours(hrAgo)
// // l(d)
// l("Current date:"+H+". 1hr ago: it was "+d)

// var H=new Date()
// var currentDate=new Date().getFullYear()
// // l(currentDate)
// var yrAgo100=currentDate-100
// // l(yrAgo100)
// var d=new Date()
// var oneHr=d.setFullYear(yrAgo100)
// // l(d)
// l("Current date: "+H+". 100yrs back: it was "+d)

// var userAge=+prompt("Enter your Age")
// l("Your Age is: "+userAge)
// var cY=new Date().getFullYear()
// // l(cY)
// var birthYear=cY-userAge
// // l(birthYear)
// l("Your birth year is: "+birthYear)

// var date1=new Date().toLocaleDateString()
// var date=new Date().getDate()
// l(date)
// var afterDate=date+10;
// var lateDate=new Date()
// var lateD=lateDate.setDate(afterDate)
// var dateSt=lateDate.toString()
// var ltDt=dateSt.slice(0,15)
// var customerName="Abdul Moiz"
// var Mth=new Date().getMonth()
// var month= ["January","February","March","April","May","June","July",
//             "August","September","October","November","December"];
// var currentMonth=month[Mth];
// var noOfUnits=410;
// var chargesPerUnit=16;
// var netAmt=noOfUnits*chargesPerUnit;
// var lateCharges=350;
// var grossAmt=netAmt+lateCharges;
// var para=document.getElementById("p")
// para.innerHTML="Customer Name: "+customerName +"<br/>"+"Month: "+currentMonth+"<br/>"+"Number of units: "+noOfUnits+"<br/>"+"Charges per unit: "+chargesPerUnit+"<br/>"+"Net Amount Payable ("+date1+"): "+netAmt+"<br/>"+"Laten Payment surcharge: "+lateCharges+"<br/>"+"Gross Amount payable: "+" ("+ltDt+"): "+grossAmt


