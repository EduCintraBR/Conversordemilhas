$(function(){
  $('#calc').click(function(){
    const milhas = parseFloat($('#milhas').val())
    const metros = 1609.34 * milhas
    const km = 1.609 * milhas

    //Alerta personalizado com Bootstrap e Jquery
    if(isNaN(milhas)){
      $('#formulario').before(
        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
          Houve um problema com a conversão :(
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`
      )
    }

    $('#metros').val(metros.toFixed(2))
    $('#Km').val(km.toFixed(2))
  })
})