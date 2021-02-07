var date = new Date();
var daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
var hours = function hours(nowHours) {
  if (nowHours === 1 || nowHours === 21) {
    return 'час';
  }
  if (nowHours > 1 && nowHours < 5 || nowHours > 21) {
    return 'часа';
  } else {
    return 'часов';
  }
};
var minutes = function minutes(nowMinutes) {
  var minuteToString = String(nowMinutes);
  var lastNumberOfMinutes = minuteToString[minuteToString.length - 1];
  if (lastNumberOfMinutes == 1 && nowMinutes !== 11) {
    return 'минута';
  }
  if (lastNumberOfMinutes > 1 && lastNumberOfMinutes < 5) {
    return 'минуты';
  } else {
    return 'минут';
  }
};
var seconds = function seconds(nowSeconds) {
  var secondToString = String(nowSeconds);
  var lastNumberOfSeconds = secondToString[secondToString.length - 1];
  if (lastNumberOfSeconds == 1 && nowSeconds !== 11) {
    return 'секунда';
  }
  if (lastNumberOfSeconds > 1 && lastNumberOfSeconds < 5) {
    return 'секунды';
  } else {
    return 'секунд';
  }
};
var showDate = function showDate() {
  return alert('\u0421\u0435\u0433\u043E\u0434\u043D\u044F ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' \u0433\u043E\u0434\u0430\n\u0414\u0435\u043D\u044C \u043D\u0435\u0434\u0435\u043B\u0438: ' + daysOfWeek[date.getDay()] + '\n\u0422\u043E\u0447\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F: ' + date.getHours() + ' ' + hours(date.getHours()) + ' ' + date.getMinutes() + ' ' + minutes(date.getMinutes()) + ' ' + date.getSeconds() + ' ' + seconds(date.getSeconds()));
};
var TimeContainer = function TimeContainer() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'You may ask the time'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          showDate();
        } },
      'What is the time?'
    )
  );
};
ReactDOM.render(TimeContainer(), document.querySelector('#show_time_container'));