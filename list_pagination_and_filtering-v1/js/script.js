const heading = document.querySelector("title")
const list = document.querySelectorAll("li");
const page = document.querySelectorAll(".student-list");
const studentsPerPage = 10;

const showPage = (list, page) => {
   let startList = (page * studentsPerPage) - studentsPerPage;
   let endList = (page * studentsPerPage) - 1;
   for (let i = 0; i < list.lenght; i+=1) {
      if(i >= startList && i <= endList ){
         list[i].style.display;
      }
      else{
         list[i].style.display = "none"
      }
   }
}
  console.log(list);


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.