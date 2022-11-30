//static vaiables onclick
const a_nuevo = document.getElementById('a_nuevo');
const a_productos = document.getElementById('a_productos');
const a_busqueda = document.getElementById('a_busqueda');
const a_promocion = document.getElementById('a_promocion');
const a_contacto = document.getElementById('a_contacto');

//section menu variables
let menu_nuevos_productos = document.getElementById('menu_nuevos_productos');
let menu_recien_llegados = document.getElementById('menu_recien_llegados');
let menu_busqueda = document.getElementById('menu_busqueda');
let menu_promociones_ofertas = document.getElementById('menu_promociones_ofertas');
let contactenos = document.getElementById('contactenos');

//hide all menu when document is ready
document.addEventListener("DOMContentLoaded", function(event) {
    menu_recien_llegados.style.display = 'none';
    menu_busqueda.style.display = 'none';
    menu_promociones_ofertas.style.display = 'none';
    contactenos.style.display = 'none';
    menu_nuevos_productos.style.display = 'block';
}); 

//add even when make click hide all and show specific item
a_nuevo.addEventListener('click', (e) => {
    e.preventDefault();
    hideAll();
    menu_nuevos_productos.style.display = 'block';
});

a_productos.addEventListener('click', (e) => {
    e.preventDefault();
    hideAll();
    menu_recien_llegados.style.display = 'block';
});

a_busqueda.addEventListener('click', (e) => {
    e.preventDefault();
    hideAll();
    menu_busqueda.style.display = 'block';
});

a_promocion.addEventListener('click', (e) => {
    e.preventDefault();
    hideAll();
    menu_promociones_ofertas.style.display = 'block';
});

a_contacto.addEventListener('click', (e) => {
    e.preventDefault();
    hideAll();
    contactenos.style.display = 'block';
});

function hideAll(){
    menu_recien_llegados.style.display = 'none';
    menu_busqueda.style.display = 'none';
    menu_promociones_ofertas.style.display = 'none';
    contactenos.style.display = 'none';
    menu_nuevos_productos.style.display = 'none';
}