var btn = document.querySelector('.menu-btn');
btn.addEventListener('click', () => {
document.querySelector('.leftnav').classList.toggle('show');
});
//querySelector() = para seleccionar clases del css.
//classList = para agregar una clase
//toggle = para que no solo la a;ada, sino que evalue si esta o no para asi poder quitarla tambien (es decir, evalua y realiza la accion contraria)

ScrollReveal().reveal('.header');
ScrollReveal().reveal('.news', { delay:500 });
ScrollReveal().reveal('.cardbanner-uno', { delay:500 });
ScrollReveal().reveal('.cardbanner-dos', { delay:500 });
