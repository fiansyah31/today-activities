//title hero
var title = "Todo List Aplication";
    document.getElementById("title").innerHTML = title;

//subtitle hero

var subtitle = "help you keep track of your daily to-do list, and prepare for the next activity";
    document.getElementById("subtitle").innerHTML = subtitle;


    //Button
    function myTodo() {
        location.replace("https://today-activities.vercel.app/todolist.html")
      }

      function myTerms() {
        location.replace("https://today-activities.vercel.app/terms.html")
      }

      if(todo.save) {
        document.getElementById("check").style.display= "block";
        document.getElementById("save").style.cursor="not-allowed"
      }
 
      