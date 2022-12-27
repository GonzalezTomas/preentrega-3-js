let lastName = document.getElementById("lastName");
let Name = document.getElementById("name");
let consulta = document.getElementById("consulta");
let myform = document.getElementById("myForm")

lastName.addEventListener("change", (event) => {
  lastNameSummary.innerHTML = event.target.value;
});
Name.addEventListener("change", (event) => {
  nameSummary.innerHTML = event.target.value;
});
consulta.addEventListener("change", (event) => {
  consultaSummary.innerHTML = event.target.value;
});


lastName.addEventListener("input", (event) => {
  lastNameSummary.innerHTML = event.target.value;
});
Name.addEventListener("input", (event) => {
  nameSummary.innerHTML = event.target.value;
});
consulta.addEventListener("input", (event) => {
  consultaSummary.innerHTML = event.target.value;
});

myform.addEventListener("submit", (event) => {
  event.preventDefault();

  var inputs = document.querySelectorAll(".form-control")
  for (const uninput of inputs) {
    console.log("Resultado: ", uninput.value);

  }
  let devolverApellido = evaluatelastname(lastName.value);
  let devolverNombre = evaluateName(Name.value)

  return devolverApellido, devolverNombre;

})

function evaluatelastname(lastName) {
  if (lastName.length <= 3 || lastName.length >= 30) {
    alert("El apellido debe contener entre 4 y 30 caracteres");
    return false;
  }
  return true;
}

function evaluateName(Name) {
  if (Name.length <= 3 || Name.length >= 30) {
    alert("El Nombre debe contener entre 4 y 30 caracteres");
    return false;
  }
  return true;
}

let btn = document.getElementById("mainButton");
btn.onclick = () => {alert("Hola " + Name.value + " " + lastName.value + " pronto seras contactado");};


