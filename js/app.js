//creates a function that generates a empty object that will be saved to localStorage
(function(){
  var user = {
    id: 0,
    name: "",
    address:"",
    email: "",
    mobile: "",
    gender: "",
  }

  //creates object that contains methods for localStorage handling
  var handler = {
    //saves user inputs as one entry to local storage
    saveEntry: function (){
      var input = document.querySelectorAll(".tcell");
      user.id = input[0].value;
      user.name = input[1].value;
      user.address = input[2].value;
      user.email = input[3].value;

      //converts obect into JSON and store into local storage
      localStorage.setItem("user_" + localStorage.length, JSON.stringify(user));

      location.reload();

    },

    //clears user input fields on the page
    clearEntry: function(){
      
    },

    //displays user entries
    displayEntry: function(){
      if (localStorage.length > 0){
        var render = "<div>";
        render += "<div id='entry_container'>Entries:</div>";
        for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          var entry = localStorage.getItem(key);
          var data = JSON.parse(entry);
          render += "<ul>";
          render += "<li>" + data.id + "</li>";
          render += "<li>" + data.name + "</li>";
          render += "<li>" + data.address + "</li>";
          render += "<li>" + data.email + "</li>";
          render += "<ul>";
        }
        render += "</div>"
        display_container.innerHTML = render;
      }
    },
    
    clearEverything: function(){
      localStorage.clear();
      location.reload();
    }
  };

  //Save Button Function
  var save = document.getElementById('save');
    save.addEventListener('click', handler.saveEntry);

  //Clear User Input Function
  var clear = document.getElementById('clear');
    clear.addEventListener('click', handler.clearEntry);

  //Clear All Entries
  var clearAll = document.getElementById('clear_storage');
    clearAll.addEventListener('click', handler.clearEverything);

  window.onload = function () {
    handler.displayEntry();
  };
})();