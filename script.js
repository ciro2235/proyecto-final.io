let hideTx_boton = document.getElementById("hideTx_boton");

let hideTx = document.getElementById("hideTx");

hideTx_boton.addEventListener('click', toggleText);

function toggleText() {
    hideTx.classList.toggle("show");

    if (hideTx.classList.contains('show')) {
        hideTx_boton.innerHTML = "Read Less";
    } else {
        hideTx_boton.innerHTML = "Read More";
    }
}
