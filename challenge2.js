function calculateSpeed(speed) {
  const speedLimit = 70;
  const demeritPoint =5;

// check if the speedlimit is less than speed it return ok if the condition if true

if (speed < speedLimit) {
  return "Ok";

}else {

  // calculate the points if speed is over the limit where i have used math.floor to round the number down to a whole number
  const points = Math.floor((speed - speedLimit) / demeritPoint);

  // check for points suspensions
  if (points > 12) {
    return  'License Suspended'
    
  }else {
    return `points: ${points}`
  }
}
  
}

// test the speed limit.
console.log(calculateSpeed(80))
console.log(calculateSpeed(49))