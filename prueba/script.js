/*let boton = document.getElementById("btn")
boton.addEventListener("click", () => {
    Swal.fire({
        title: 'Clickeado!',
        text: 'Queres continuar',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        cancelButtonText: 'Cancelar',
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Tocaste Aceptar', '', 'success')
        }else{  
            Swal.fire('Tocaste Cancelar', '', 'error')
        }
      })
})
*/
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
var closeButton = document.getElementById("closeButton");
var modalMessage = document.getElementById("modalMessage");

btn.onclick = function() {
  modal.style.display = "block";
  mostrarMensaje("Este es un mensaje de prueba");
}

span.onclick = function() {
  modal.style.display = "none";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function mostrarMensaje(mensaje) {
  modalMessage.innerText = mensaje;
}
