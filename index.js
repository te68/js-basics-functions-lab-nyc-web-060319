function distanceFromHqInBlocks (someValue) {
  return Math.abs(someValue - 42)
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(((end - start) * 264))
}


function  calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 400)
      {return 0}
    else if (distance < 2000)
      {return (distance-400) * .02}
    else if (distance > 2500)
      {return 'cannot travel that far'}
    else if (distance > 2000)
      {return 25}
}
