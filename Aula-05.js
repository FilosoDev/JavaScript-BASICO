// Aula 05 - Comando de Seleção Switch.

var tipoUsuario = "qualquer cargo";

switch (tipoUsuario) {
    case "Admin":
        console.log("Bem-vindo Admin");
        break;
    case "Gerente":
        console.log("Bem-vindo gerente");
        break;
    case "Secretário-assistente":
        console.log("Bem-vindo Secretário-assistente");
        break;
    default:
        console.log("Bem-vindo anônimo");
}