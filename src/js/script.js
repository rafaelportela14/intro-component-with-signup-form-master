const inputs = document.querySelectorAll("input:not([type='submit])");
console.log(inputs)


inputs.forEach(input =>{
    input.addEventListener('invalid', addMensagemDeErro);

    input.addEventListener('blur',() => {
        input.checkVisibility();

    })

    input.addEventListener('focus', removerMensagemDeErro)

})

function addMensagemDeErro(e){

    const name = e.target.getAttribute("name");
    var error_icon  = document.createElement('span');
    error_icon.setAttribute("data-id",name);
    error_icon.classList.add("error-icon");
    error_icon.innerHTML = "<img src='images/icon-error.svg alt=''>";

    var mensagemDeErro = document.createElement('span');
    mensagemDeErro.setAttribute("data-id",name);
    mensagemDeErro.classList.add("mensagemDeErro");

    if (e.target.value == "" || e.target.value == null ) mensagemDeErro.innerHTML = "" + e.target.getAttribute('placeholder') + "não pode ser vazio.";

    else mensagemDeErro.innerHTML = "Parace que não é " + e.target.getAttribute("placeholder") + ".";

    e.target.after(mensagemDeErro);
    e.target.after(error_icon);

    e.target.classList('error');

}

function removerMensagemDeErro(){
    var elementos = document.querySelectorAll("[data-id'" + e, target.getAttribute("name") +"']");

    elementos.forEach(error_element => {
        error_element.remove()
    })

    e.target.classList.remove('error');

}