const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD


function countHours(year, holidays) {
    let hours = 0
    for (let i = 0; i < holidays.length; i++) {
        const date = new Date(`${year}/${holidays[i]}`); 
        console.log(`dia : ${date.getDay()}`);
        if (date.getDay() > 0 && date.getDay()< 6) {
            hours +=2; 
        } 
        
    }
    return hours; 
}
countHours(year, holidays); 
