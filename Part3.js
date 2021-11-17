function caught_speeding(speed, is_birthday){
var speed = speed;
  if (is_birthday) {speed = speed - 5}
  else {speed = speed}

  if (speed <= 60) {return 0}
  else if (61 <= speed <= 80) {return 1}
  else if (speed >= 81) {return 2}
}


console.log(caught_speeding(60, false))
console.log(caught_speeding(65, false))
console.log(caught_speeding(65, true))