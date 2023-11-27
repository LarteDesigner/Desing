const btnEmail = document.getElementById('email');
const btnWhatsApp = document.getElementById('whats');
const btnInstagram = document.getElementById('insta');


btnEmail.addEventListener('click', () => {
    var destinatario = "hideki.professional.work@gmail.com";

    var link = "mailto:" + destinatario + "?subject=" + "Ola Gostaria De..." + "&body=" + "";
    window.open(link);
})



btnWhatsApp.addEventListener('click', () => {
    var numeroTelefone = "+55 12 99134-6803";
    
    var linkWhatsApp = "https://wa.me/" + numeroTelefone;
    window.open(linkWhatsApp);
});



btnInstagram.addEventListener('click', () => {

    var nomeUsuario = "hidekii.ac";
    
    var linkInstagram = "https://www.instagram.com/" + nomeUsuario;

    window.open(linkInstagram);
});