

document.addEventListener("DOMContentLoaded", function() {
  var about = showAboutModal();
  var projects = showProjectsModal();
  var notes = showNotesModal();
  closeModalOnSpanClick(about, "close-m-1");
  closeModalOnSpanClick(projects, "close-m-2");
  closeModalOnSpanClick(notes, "close-m-3");  
  closeModalOnBackgroundClick(about, projects, notes);


})





function showAboutModal() {

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
    modal.style.display = "block";
    if(document.getElementById("typedtext").innerHTML === ""){
      typewriter();
    }
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
  var body = document.getElementsByTagName("body")[0];

  console.log(body)
  
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
        break;
      case modal2:
        modal2.style.display = "none";
        break;
      case modal3:
        modal3.style.display = "none";
        break;
    }
  } 
}
  function closeModalOnSpanClick(modal, id) {

    var span = document.getElementById(id);
    console.log(span)
    span.onclick = function() {
      modal.style.display = "none";
    }
   
  }


  var aText = new Array("Hello!","I'm Jorge, a junior developer seeking my first professional role. <br /> I have a strong passion for languages such as Java, Python and in my spare time I really, REALLY enjoy creating CSS animations (even though I wish I was better at it). <br /> In high school, I developed a passion for programming and everything electronics and I programmed my first robot! <br /> This helped me develop some problem-solving skills and a deeper understanding of what is possible with programming and I've been in love with it ever since. <br /> Thank you for taking the time to read a little bit about me. <br> Feel free to contact me and please, check out my github!"
    );
    var iSpeed = 50; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
