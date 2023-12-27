$(function() {
    
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    });
    
    $('#meuForm').validate({
        messages: {
            nome: {
                required: "Por favor, outro nome brother"
            },
            email: {
                required: "Por favor, informe seu e-mail.",
                email: "Por favor, informe um e-mail válido."
            },
            mensagem: {
                required: "Por favor, escreva sua mensagem."
            }
        },

    });
    
    $('#meuForm').submit(function(e) {
        e.preventDefault();
    })
})