function listaEst() {
    let estudiante = document.getElementById("respuesta").value;
  
    //condicional
    if (estudiante === "presente") {
      alert("El estudiante esta presente");
    } //accion a ejecutar si la condicion no se cumple
    else {
      alert("El estudiante no asistio");
    }
    //condicion de si es falso negando el true
    /*if (estudiante !== true){
        alert("No esta")
    }*/
  }
  
  function mama() {
    let respuesta = "pase";
  
    if (respuesta === "pase") {
      alert("Felicitarlo");
    } else {
      alert("le paga*");
    }
  }