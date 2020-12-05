// Lets Start getting the questions From JSON object :

let Index = 0;
let question = 1;
let width = 0;

function Questions(){

    let myRequest = new XMLHttpRequest();
    
    myRequest.onreadystatechange =function(){
    
        if(this.readyState === 4 && this.status === 200){
           
           
           let Myobj = JSON.parse(this.responseText);
           

          // count questions :
CountQ(Myobj);
           // Add questions:
           Add(Myobj[Index]);


           // Next questions : 
        document.querySelector('.next').addEventListener('click',(e)=>{
            if(Index === Myobj.length - 1){
              document.querySelector('.pop-up').classList.remove('hidden');
             
            }
           
            question++;



            e.preventDefault();
            Check(Myobj[Index]);
            // count questions :
CountQ(Myobj);


            Index++;
            // Add questions:

            Add(Myobj[Index]);
            



        });
        

    }
        
        }
   
    myRequest.open("GET", "quiz.json",true);
    
    myRequest.send();
    
    
    
    
    }

Questions();


// Lets Add the Questions : 

function Add(obj){

    let quiz = document.querySelector('.quiz');
   
    quiz.innerHTML = `
    <h2>${obj.title}</h2>
<div class='questions'>
  <li class="question">${obj.question[0]}</li> 
  <li class="question">${obj.question[1]}</li> 
  <li class="question">${obj.question[2]}</li> 
  <li class="question">${obj.question[3]}</li> 



</div> 
    `;
    Toggleactive();

    }
// Add active class : 
function Toggleactive(){
    let questionslist = document.querySelectorAll('.questions li');
questionslist.forEach((li)=>{
    li.addEventListener('click' , (e)=>{
        questionslist.forEach((l)=>{
            l.classList.remove('active');

        });
        li.classList.add('active');


    });


});

}

// check the answer : 
function Check(obj){
    let userAnswer = document.querySelector('.questions li.active').innerHTML;
    let progress = document.querySelector('.progress');
    if(userAnswer === obj.answer){
        width += 20;
        progress.style.width = width + '%';
        progress.innerHTML = width + '%';

    }


}

function CountQ(obj){
  
    let Count = document.querySelector('.count');
    Count.innerHTML = `
    Question ${question} Of ${obj.length}
    
    `;


}
// result : 
let score = document.querySelector('.score');


       





