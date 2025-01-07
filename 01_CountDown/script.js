const weekdays =[
'sunday',
'monday',
'thuesday',
'wednesday',
'thursday',
'friday',
'saturday'
]
const months =[
'Jan',
'Feb',
'March',
'April',
'May',
'June',
'July',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec'
]
const daysText = document.querySelector('.expDay')
const expDate = document.querySelector('.expDate')
const expMonth = document.querySelector('.expMonth')
const expYear = document.querySelector('.expYear')
const expHour = document.querySelector('.expHour')
const TimeBlockField = document.querySelector('.time-blocks')

const expirDate = new Date(2025,0,15,12,30,0)
daysText.textContent = weekdays[expirDate.getDay()]
expDate.textContent = expirDate.getDate()
expMonth.textContent = months[expirDate.getMonth()]
expYear.textContent = expirDate.getFullYear()
expHour.textContent = `${expirDate.getHours()}:${expirDate.getMinutes()}am`

const expTimer = document.querySelectorAll('.deadline-format h4')
function displayExpTime(){
    const getCurrentTime = new Date().getTime()
    const getFutureTime = expirDate.getTime()
    const t = getFutureTime - getCurrentTime
    const oneDay = 24 * 3600 * 1000
    const oneHour = 3600*1000
    const oneMinute = 60*1000
    const oneSecond = 1000
    
    const showDay = Math.floor(t/oneDay)
    const showHour = Math.floor((t%oneDay)/oneHour)
    const showMinutes = Math.floor((t%oneHour)/oneMinute)
    const showSeconds = Math.floor((t%oneMinute)/oneSecond)
const valuesToDisplay = [showDay,showHour,showMinutes,showSeconds]
    expTimer.forEach((item,index)=>{
        item.textContent = formatTime(valuesToDisplay[index]) 
    })
    if(t<0){
     clearInterval(ineterval)
     TimeBlockField.textContent = 'Ops! Sorry this giveaway has expired!!!'
    }
}

function formatTime(item){
    if(item<10) return '0' + item
    return item 
}

const ineterval = setInterval(displayExpTime, 1000);
displayExpTime()