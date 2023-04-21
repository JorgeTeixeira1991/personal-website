
document.addEventListener("DOMContentLoaded", function() {
  var about = showAboutModal();
  var projects = showProjectsModal();
  var notes = showNotesModal();
  closeModalOnBackgroundClick(about, projects, notes);
})

function showAboutModal() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  return modal;
}

function showProjectsModal() {
  var modal_projects = document.getElementById("projects-modal");
  var projects_btn = document.getElementById("projects-btn");
  var span = document.getElementsByClassName("close")[0];
  
  projects_btn.onclick = function() {
    modal_projects.style.display = "block";
  }

  span.onclick = function() {
    modal_projects.style.display = "none";
  }
  return modal_projects;
}

function showNotesModal() {
  var notes_modal = document.getElementById("notes-modal");
  var notes_btn = document.getElementById("notes-btn");
  var span = document.getElementsByClassName("close")[0];
  
  notes_btn.onclick = function() {
    notes_modal.style.display = "block";
  }
  
  span.onclick = function() {
    notes_modal.style.display = "none";
  }
  return notes_modal;
}

function closeModalOnBackgroundClick(modal1, modal2, modal3) {
  window.onclick = function(event) {
    switch(event.target){
      case modal1:
        modal1.style.display = "none";
      case modal2:
        modal2.style.display = "none";
      case modal3:
        modal3.style.display = "none";
    }
  }  
}