// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  const headquarter = 42
  return Math.abs(distance - headquarter);
}

function distanceFromHqInFeet(distance1){
 distanceFromHqInBlocks (42);
   return Math.abs(distance1 - 42) * 264;
}

function distanceTravelledInFeet (start, destination) {
   return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
  let feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) return 0;
 else if (feet >= 400 && feet <= 2000) return Math.abs(feet - 400) *0.02;
 else if (feet >= 2000 && feet <=2500) return Math.abs(25);
 else if (feet > 2500) return 'cannot travel that far';
}
