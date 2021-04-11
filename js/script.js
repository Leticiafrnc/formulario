const form = document.querySelector("form");

btnLogin.addEventListener("click", event => { //addEventListener espera do evento, no casso só executa depois que clicar
    event.preventDefault(); // retira a ação padrão do elemnto 
    form.classList.add("form-hide"); // adiciona umnovo eventono caso, ele parece de novo o efeito do formulario 
})