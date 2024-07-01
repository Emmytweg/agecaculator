const btn = document.querySelector('#btn')


function calculateAge() {

    // Error elements
    const yearError = document.getElementById('yearError')
    const monthError = document.getElementById('monthError')
    const dayError =  document.getElementById('dayError')
    const genError = document.querySelectorAll("#genError")

    // Clear previous error 
   if (yearError) yearError.innerHTML = ''
   if (monthError) monthError.innerHTML = ''
   if (dayError) dayError.innerHTML = ''
   if (genError) genError.innerHTML = ''

//Get Input Value
    const day = document.getElementById("day").value
const month = document.getElementById("month").value
const year = document.getElementById("year").value

    let valid = true


       //Validate inputs
if (!year) {
    yearError.innerHTML  = 'Field is required'
    valid =false
}else if (year >= 2024) {
 yearError.innerHTML  = 'Year must be in the past'
 valid =false

}
if (!month) {
    monthError.innerHTML = 'Field is required'
    valid =false
}else if (month < 1 || month >12) {
   monthError.innerHTML = 'Year must be in the past'
   valid =false

}
if (!day) {
    dayError.innerHTML = 'Field is required'
    valid =false
}else if (day<1 || day>31) {
    dayError.innerHTML = 'Year must be in the past'
    valid =false

}


//Get current date
  
const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1
    const currentDay = currentDate.getDate()

    // Check future date
    const birthDate = new Date(year, month - 1, day)
     if(birthDate > currentDate){
        yearError.innerHTML  = 'Birth date cannot be in future'
        valid =  false
    }
    if (!valid) {
    return
}
// Calculate age
let ageYears = currentYear - year

let ageMonths = currentMonth - month
let ageDays = currentDay - day

//Adjust the months and date if neccessary
if (ageDays<0) {
        ageMonths--
        ageDays += new Date(currentYear, currentMonth - 1, 0).getDate()
    }
    if (ageMonths< 0) {
        ageYears--
        ageMonths += 12
    }

    //Display the result



const textDaysInput = document.getElementById('textDaysInput')
const textMonthsInput = document.getElementById('textMonthsInput')
const textYearsInput = document.getElementById('textYearsInput')
  textYearsInput .value = ageYears
  textMonthsInput.value = ageMonths
  textDaysInput.value = ageDays
    console.log(`You're ${ageYears} years, ${ageMonths} months, ${ageDays} days`)

}

btn.addEventListener('click', calculateAge )