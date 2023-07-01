// Calc difference between 2 Dates
function dateDiff(date1, date2) {
  var diff = {};
  var tmp = date2 - date1;

  tmp = Math.floor(tmp / 1000);
  diff.sec = tmp < 0 ? 0 : tmp % 60;

  tmp = Math.floor((tmp - diff.sec) / 60);
  diff.min = tmp < 0 ? 0 : tmp % 60;

  tmp = Math.floor((tmp - diff.min) / 60);
  diff.hour = tmp < 0 ? 0 : tmp % 24;

  tmp = Math.floor((tmp - diff.hour) / 24);
  diff.day = tmp < 0 ? 0 : tmp;

  return diff;
}
function select(element, all = false) {
  if(all == false){

    let selector = document.querySelector(element);
    return selector;
  }else{
    
    let selector = document.querySelectorAll(element);
    return selector;
  }
}