/*This function loads and assists the drop down navigation menu*/
// loads on opening of the page
//click on the button,toggle between hiding and showing the dropdown navigation menu 
function navMenu() {
    document.getElementById("dropdwn").classList.toggle("show");
  }
  
  // Close dropdown if clicked outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
      var dropdown = document.getElementsByClassName("dropdown-nav");
      var i;
      for (i = 0; i < dropdown.length; i++) {
        var opendropdown = dropdown[i];
        if (opendropdown.classList.contains('show')) {
          opendropdown.classList.remove('show');
        }
      }
    }
  }


