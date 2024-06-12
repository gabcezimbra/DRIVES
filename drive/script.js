document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('aprender-drives');
    
    // Esconde o botão inicialmente
    button.style.display = 'none';
    
    // Define o tempo para mostrar o botão após 60 segundos de carregamento da página
    const tempoParaExibirBotao = 60000; // 60 segundos
    
    // Mostra o botão após o tempo especificado
    setTimeout(function() {
        button.style.display = 'block';
    }, tempoParaExibirBotao);
});
