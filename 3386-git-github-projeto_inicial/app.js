

let senhaDoSistema = "senhaTeste!";
let senha = "";

while (senha !== senhaDoSistema) {
    senha = prompt("Digite a senha do sistema:");
    if (senha !== senhaDoSistema) {
        alert("Senha incorreta");
    }
}

alert("Acesso ao sistema garantido"); 
