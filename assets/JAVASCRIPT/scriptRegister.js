document.querySelector("#btn-register").addEventListener("click", function (e){
    const username = document.querySelector("#username").value ;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (username && email && password){
        alert("Usuário cadastrado com sucesso!");
    } else {
        alert("Preencha todos os campos");
    }
});