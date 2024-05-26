

let dates = new Date();

let start_date = document.querySelector('#date1');
let End_date = document.querySelector('#date2');
let start_day = new Date(dates);
let todays = dates.getDay()
start_day.setDate(dates.getDate()-todays+1)
let End_day = new Date(dates);
End_day.setDate(start_day.getDate()+5)
 console.log(start_day, End_day, start_date)


 function getStartDate() {
    
    var dd = String(start_day.getDate()).padStart(2, '0');
    var mm = String(start_day.getMonth() + 1).padStart(2, '0'); // 1월이 0으로 시작하므로 +1 해줍니다.
    var yyyy = start_day.getFullYear();
  
    let today = yyyy + '-' + mm + '-' + dd;
    return today;
  } 

 function getEndDate() {
    var dd = String(End_day.getDate()).padStart(2, '0');
    var mm = String(End_day.getMonth() + 1).padStart(2, '0'); // 1월이 0으로 시작하므로 +1 해줍니다.
    var yyyy = End_day.getFullYear();
  
    let today = yyyy + '-' + mm + '-' + dd;
    return today;
 }
 start_date.value = getStartDate();
 End_date.value = getEndDate();