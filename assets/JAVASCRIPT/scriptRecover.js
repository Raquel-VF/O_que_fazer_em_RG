document.querySelector("#btn-recover").addEventListener("click", function (e){
    e.preventDefault();
    const email =document.querySelector("#email").value;

    if(email){
        alert(`Instruções enviadas para: ${email} `);
    } else {
        alert("Por favor, insirea um email válido.")
    }

});