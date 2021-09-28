// console.log("Java Script is Linked");
displayNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  // console.log(addTxt);
  //notes are going to store in array
  // so i have used JSON.parse to fetch and JSON.strigify to put data
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);
  displayNotes();
});
function displayNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let str = "";
  notesObj.forEach(function (elm, index) {
    str += `<div class="input-card noteCard">
        <div class="noteCard card card-body" >
            <h3 class="card-title">Note ${index + 1}</h3>
            <p class="card-text" id="notes">${elm}</p>
            <button class="button-note button2" id="${index}" onclick="deleteNote(this.id)" >Delete Note</button>
        </div>
    </div>`;
  });
  let notesElm = document.getElementById("notes1");
  if (notesObj.length != 0) {
    notesElm.innerHTML = str;
  } else {
    notesElm.innerHTML = `Nothing to show! "Add a note to add note section "`;
  }
}

// function to delete a note
function deleteNote(lol) {
  // console.log("deleting data " + lol);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(lol, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  displayNotes();
}

//search section
let search1 = document.getElementById("srchevnt");
search1.addEventListener("input", () => {
  let match = search1.value;
  let notecards = document.getElementsByClassName("noteCard");
  Array.from(notecards).forEach(function (elm) {
    let cardTxt = elm.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(match)) {
      elm.style.display = "block";
    } else {
      elm.style.display = "none";
    }
    // console.log(cardTxt);
  });
});
