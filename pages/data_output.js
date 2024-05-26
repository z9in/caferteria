
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

 let outputs = document.querySelector('#submits')
 outputs.addEventListener('click', ()=>{
   let data = {
      cafeteria_name: document.querySelector('#cafeterias').value,
      date1: document.querySelector('#date1').value
   };
   let option = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   }
   fetch('/output', option).then(res => res.json()).then(
      data =>{
         console.log(data[0].menu1_1)
         document.querySelector('#mon1').value = data[0].menu1_1;
         document.querySelector('#mon2').value = data[0].menu1_2;
         document.querySelector('#mon3').value = data[0].menu1_3;
         document.querySelector('#mon4').value = data[0].menu1_4;
         document.querySelector('#mon5').value = data[0].menu1_5;
         document.querySelector('#mon6').value = data[0].menu1_6;

         document.querySelector('#tue1').value = data[0].menu2_1;
         document.querySelector('#tue2').value = data[0].menu2_2;
         document.querySelector('#tue3').value = data[0].menu2_3;
         document.querySelector('#tue4').value = data[0].menu2_4;
         document.querySelector('#tue5').value = data[0].menu2_5;
         document.querySelector('#tue6').value = data[0].menu2_6;

         document.querySelector('#wed1').value = data[0].menu3_1;
         document.querySelector('#wed2').value = data[0].menu3_2;
         document.querySelector('#wed3').value = data[0].menu3_3;
         document.querySelector('#wed4').value = data[0].menu3_4;
         document.querySelector('#wed5').value = data[0].menu3_5;
         document.querySelector('#wed6').value = data[0].menu3_6;

         document.querySelector('#thu1').value = data[0].menu4_1;
         document.querySelector('#thu2').value = data[0].menu4_2;
         document.querySelector('#thu3').value = data[0].menu4_3;
         document.querySelector('#thu4').value = data[0].menu4_4;
         document.querySelector('#thu5').value = data[0].menu4_5;
         document.querySelector('#thu6').value = data[0].menu4_6;

         document.querySelector('#fri1').value = data[0].menu5_1;
         document.querySelector('#fri2').value = data[0].menu5_2;
         document.querySelector('#fri3').value = data[0].menu5_3;
         document.querySelector('#fri4').value = data[0].menu5_4;
         document.querySelector('#fri5').value = data[0].menu5_5;
         document.querySelector('#fri6').value = data[0].menu5_6;
      }
    )
 })
 