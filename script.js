const weighter = document.getElementById('weightInput') 
const heighter = document.getElementById('heightInput') 
const calcBtn = document.getElementById('calcBtn') 
const result = document.getElementById('result') 
const error = document.getElementById('error') 

const bmi = (heighter, weighter) => {
  if (heighter <= 0 || isNaN(heighter) || heighter == undefined) {
    error.textContent = "Your height has to be a valid number" 
    return 
  }
  if (weighter <= 0 || isNaN(weighter) || weighter == undefined) {
    error.textContent = "Your weight has to be a valid number" 
    return 
  }

  error.textContent = ""

  const bodyMassIndex = (weighter / (heighter * heighter)) 

  if (bodyMassIndex < 18.5)
    result.textContent = `Your BMI is ${bodyMassIndex.toFixed(2)}, you are underweight` 
  else if (bodyMassIndex < 25)
    result.textContent = `Your BMI is ${bodyMassIndex.toFixed(2)}, you are at normal weight` 
  else if (bodyMassIndex < 30)
    result.textContent = `Your BMI is ${bodyMassIndex.toFixed(2)}, you are overweight` 
  else
    result.textContent = `Your BMI is ${bodyMassIndex.toFixed(2)}, you are obese` 
} 

calcBtn.addEventListener("click", () => {
  const weight = Number(weighter.value) 
  const height = Number(heighter.value) 
  bmi(height, weight) 
}) 
