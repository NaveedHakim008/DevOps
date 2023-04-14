function filterProjects() {
    // Get input value
    var filterValue = document.getElementById("tech").value.toUpperCase();
  
    // Get project list
    var projects = document.getElementById("project-list");
  
    // Get project items
    var projectItems = projects.getElementsByClassName("project");
  
    // Loop through project items
    for (var i = 0; i < projectItems.length; i++) {
      // Get data-tech attribute value
      var tech = projectItems[i].getAttribute("data-tech");
  
      // If filter value is empty or matches project tech
      if (filterValue === "" || tech.toUpperCase().indexOf(filterValue) > -1) {
        // Show project
        projectItems[i].style.display = "block";
      } else {
        // Hide project
        projectItems[i].style.display = "none";
      }
    }
  }
  