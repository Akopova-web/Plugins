const date = new Date;
const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const months = [
  'января', 'февраля', 'марта',
  'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября',
  'октября', 'ноября', 'декабря'
];
const hours = (nowHours) => {
  if (nowHours === 1 || nowHours === 21) {
    return 'час';
  }
  if (nowHours > 1 && nowHours < 5 || nowHours > 21) {
    return 'часа'
  }
  else {
    return 'часов'
  }
}
const minutes = (nowMinutes) => {
  let minuteToString = String(nowMinutes);
  const lastNumberOfMinutes = minuteToString[minuteToString.length-1];
  if (lastNumberOfMinutes==1 && nowMinutes!==11) {
    return 'минута';
  }
  if (lastNumberOfMinutes > 1 && lastNumberOfMinutes < 5) {
    return 'минуты'
  }
  else {
    return 'минут'
  }
}
const seconds = (nowSeconds) => {
  let secondToString = String(nowSeconds);
  const lastNumberOfSeconds = secondToString[secondToString.length-1];
  if (lastNumberOfSeconds==1 && nowSeconds!==11) {
    return 'секунда';
  }
  if (lastNumberOfSeconds > 1 && lastNumberOfSeconds < 5) {
    return 'секунды'
  }
  else {
    return 'секунд'
  }
}
const showDate = () => {
  return (
    alert( `Сегодня ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года\nДень недели: ${daysOfWeek[date.getDay()]}
Точное время: ${date.getHours()} ${hours(date.getHours())} ${date.getMinutes()} ${minutes(date.getMinutes())} ${date.getSeconds()} ${seconds(date.getSeconds())}`)
  )
}
const TimeContainer = () => {
  return <div>
    <h1>You may ask the time</h1>
    <button onClick={() => { showDate() }}>What is the time?</button>
  </div>
}
ReactDOM.render(TimeContainer(), document.querySelector('#show_time_container'))