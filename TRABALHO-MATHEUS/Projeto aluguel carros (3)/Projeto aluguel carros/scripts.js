document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;


    console.log("Nome: " + nome);
    console.log("Email: " + email);
    console.log("Mensagem: " + mensagem);
});

function openContactForm() {
    window.location.href = "contato.html";
}


