const date = new Date();
// console.log(Date.now())
// console.log(date.getTime())
// console.log(date.toString())
// console.log(date.toUTCString())
// date.setDate(date.getDate()-2)
// console.log(date)

// // for measurement
// const start = Date.now()
// for(let i = 0; i<100000000; i++){
//     res = i*i*i
// }
// const end = Date.now()
// console.log('timeTaken : ', end-start)

// new date() vs date().getTime()
const dateDiff = (date1, date2) => {
  return date2 - date1;
};
const getTimeDiff = (date1, date2) => {
  return date2.getTime() - date1.getTime();
};

function calculateTotalTime(fn) {
  const date1 = new Date(0);
  const date2 = new Date();
  const start = Date.now();
  for (let i = 0; i < 1000000; i++) {
    fn(date2, date1);
  }
  return Date.now() - start;
}

// console.log(calculateTotalTime(getTimeDiff))
// console.log(calculateTotalTime(dateDiff))
// let time1= 0
// let time2 = 0
// for(let i=0; i<10; i++){
//     time1+=calculateTotalTime(dateDiff)
//     time2+=calculateTotalTime(getTimeDiff)
// }
// console.log('time 1 : ',time1,'\n time2 : ',time2)

function getDateAgo(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - days);

  return `Date :  ${newDate.getDate()} : ${newDate}`;
}
// const date2 = new Date(2015,0,2)
// console.log(getDateAgo(date2,1))
// console.log(getDateAgo(date2,2))
// console.log(getDateAgo(date2,365))

// const newDate = new Date(2025, 2, 0);
// console.log(newDate);
// console.log(newDate.getDate());


function formateDate(date){
    const dateNow = new Date()
    if(dateNow.getTime()-date.getTime()<=1000){
        console.log('right now')
    }
    else if(dateNow.getTime()-date.getTime()<=1000*60){
        console.log(`${(dateNow.getTime()-date.getTime())/1000} s ago`)
    }
    else if(dateNow.getTime()-date.getTime()<=1000*60*60){
        console.log(`${(dateNow.getTime()-date.getTime())/(1000*60)} min ago`)
    }else{
        console.log(`${(dateNow.getTime()-date.getTime())/(1000*60*60*24)} days ago Date : ${new Date(date)}`)
    }
}

// formateDate(new Date( new Date()-1))
formateDate(new Date( new Date()-59*1000))
formateDate(new Date( new Date()-59*60*1000))
formateDate(new Date(new Date - 2*86400 * 1000))