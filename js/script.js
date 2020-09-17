/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
//
document.addEventListener('DOMContentLoaded', () => {
   const studentList = document.querySelectorAll('.student-item');
   const perPage = 10;
   const divClassPage = document.querySelector('.page');
   const li = document.querySelectorAll('.student-list');
   const ulPagination = document.createElement('ul');
   
   /***function to display 10 students to a page at a time. ***/
       function showPage(studentList, page) { 
         const firstIndex = page * 10 - 10;
         const lastIndex = page * 10 - 1;
         
         // Loop over items in the list parameter creating the list of ten students to a page
         for(let i = 0; i < studentList.length; i++) {
            if ( i >= firstIndex && i <= lastIndex) {
               //to show items if true
               studentList[i].style.display = 'block';
            } else {
               //to hide items if false
               studentList[i].style.display = 'none';
            }
          
         }
      }
      /**testing above function console.log(showPage(studentList, 1 ));
       * to be deleted */
   
     /**creating the amount of pages needed to display all 54 students
      * at 10 students a page */ 
      function appendPageLinks(studentList) {
         //calculating the number of pages needed to display the student list
         const numberOfPgs = Math.ceil(studentList.length / 10);
         // creating a div with pagination class and appending it to the div.page
         const divPagination = document.createElement('div');
            divPagination.className = 'pagination';
            divClassPage.appendChild(divPagination);
         //adding ul to the pagination div that stores the links
         //a linked page number for each page
         for(let i = 0; i < numberOfPgs.length; i++) {
            const paginationLi = document.createElement('li');
            const pgLink = document.createElement('a');

            paginationLi.appendChild(pgLink);
            ulPagination.appendChild(paginationLi);
         }

      }
      /* 
      5. Add an event listener to each a tag. When they are clicked 
      call the showPage function to display the appropriate page 
      6. Loop over pagination links to remove active class from all links 
      7. Add the active class to the link that was just clicked. You can identify that 
      clicked link using event.target */ 
      
   
   // Remember to delete the comments that came with this file, and replace them with your own code comments.
   });
