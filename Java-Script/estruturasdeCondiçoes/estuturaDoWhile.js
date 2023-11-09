let escolha;

do {
    // Perceba que ele irá gerar um prompt para recolher
    // a reposta do usuário pela tela
    escolha = prompt(
        "Escolha uma opção:\n" +  // O '\n' aqui usamos para pular linha semlhante ao <BR> do HTML
        "1. Opção 1\n" +
        "2. Opção 2\n" +
        "3. Sair"    
    );
    //Aqui será as ações que vai acontecer na escolha de cada número
    //Esse bloco ésta dentro da while
    if (escolha == "1") {
        alert("Você escolheu a Opção 1");
    }
    else if (escolha == "2") {
        alert("Você escolheu a Opção 2");
    }
    else if (escolha == "3") {
        alert("Saindo do menu. Até logo!");
    }
    else {
        alert("Opção Inválida. Tente novamente.")
    }
}while (escolha !== "3");
