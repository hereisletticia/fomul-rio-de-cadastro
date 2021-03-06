const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (e) => {
    e.preventDefault(); // previne o carregamento padrão da page

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue == '') {
        setErrorFor(username, 'O nome de usuário é obrigatório');
    }else {
        setSuccessFor(username);
    }

    if (emailValue == '') {
    setErrorFor(email, 'O email é obrigatório'); // campo em branco        
    }else if (!checkEmail(emailValue)) {
        // e-mail formato errado
        setErrorFor(email, 'Por favor, insira um e-mail válido');
    }else {
        setSuccessFor(email); // sucesso
    }

    if (passwordValue == '') {
        setErrorFor(password, 'A senha é obrigatória');
    }else if (passwordValue.length < 6) {
        setErrorFor(password, 'A senha deve ter no mínimo 6 caracteres');
    }else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue == '') {
        setErrorFor(passwordConfirmation, 'A confirmação de senha é obrigatória');
    }else if (passwordConfirmationValue != passwordValue) {
        setErrorFor(passwordConfirmation, 'As senhas não conferem');
    }else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll('.form-control');

    const formIsValid = [... formControls].every((formControl) => {
        return (formControl.className === 'form-control success');
    });

    if (formIsValid) {
        alert('Cadastro concluído com sucesso!');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // adicionar a mensagem de  erro
    small.innerText = message;

    // adicionar a classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // adicionar a classe de sucesso
    formControl.className = "form-control success";
}

// regex e-mail
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
