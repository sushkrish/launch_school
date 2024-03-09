console.log(calculateBMI(180, 80)); // "24.69"
console.log(calculateBMI(164, 60));

function calculateBMI(heightCM, weightKG){
  let heightInMeters = heightCM/100;
  let weightInKilograms = weightKG;
  let bmi = weightInKilograms / heightInMeters**2;
  return bmi.toFixed(2);
}
