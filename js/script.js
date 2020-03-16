  

let studentList = document.getElementsByClassName('student-list');
let newStudentList = StudentList.children;
let containerDiv = document.querySelector('.page');
console.log(newStudentList);


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {
   const lowerNum = (page * 10) - 10;
   const upperNum = (page * 10) - 1;
   for(let i = 0; list.length; i++){
      if(i >= lowerNum && i <= upperNum){
         list[i].style.display = 'block';
      }else{
         list[i].style.display = 'none';
      }
   } 
}

showPage(studentList, 1)

const appendPageLinks = (list) => {
   let newDiv = document.createElement('div');
   let pageDiv = document.getElementsByClassName('.page')[0];
   let ul = document.createElement('ul');
   let li =  document.createElement('li');
   let a = document.createElement('a');

   newDiv.className = 'pagination';
   pageDiv.appendChild(newDiv);
   newDiv.appendChild(ul);

   
}

