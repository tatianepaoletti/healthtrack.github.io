 $(document).ready(function(){
  $('#cadastro').validate({
    rules:{
      nome:{
      required: true;
      minlength: 3
    },
    email:{
      required: true;
      minlength: 5
    },
    senha:{
      required: true;
      rangelength: 6
    },

    messages:{
      nome:{
      required: "Este campo é obrigatório",
      minlength: "O nome deve conter no mínimo 10 caracteres"
    };
      email:{
      required:"Este campo é obrigatório",
      email:"Digite um email válido"
    };
      senha:{
      required: "Este campo é obrigatório"
      rangelength: "Senha deve ter 6 numeros"
    }
  });
});