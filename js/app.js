const btn = document.getElementById("btn");
if (btn) {
  btn.addEventListener("click", () => {
    document.getElementById("message").textContent = "Welcome student!";
  });
}

const form = document.getElementById("noteForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const note = document.getElementById("noteInput").value;

    if (note === "") {
      document.getElementById("error").textContent = "Input required";
      return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    form.reset();
    alert("Saved");
  });
}

const list = document.getElementById("notesList");
if (list) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach(note => {
    let p = document.createElement("p");
    p.textContent = note;
    list.appendChild(p);
  });
}
