$(document).ready(function() {

  // Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
  // https://flynn.boolean.careers/exercises/api/array/music
  // L'api ci restituirà i dischi musicali che dovremo stampare a schermo con Handlebars.

  // chiamata ajax all'API con endpoint che ritorna i cd
  $.ajax(
   {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success:  function (data, stato) {
              // chima la funzione per fare il render con Handlebars
              render(data.response);
              },
    error: function (richiesta, stato, errore) {
            // messaggio di errore
            alert("Attenzione, ERRORE!\nTipo errore: " + richiesta.status + " (" + errore + ")");
            }
   }
  );

  // evento CHANGE della SELECT dei generi musicali
  $(".sel-genere").change(
    function(){
      // recupera il genere musicale scelto
      var genereScelto = $(this).val();
      // mostra il cd a seconda del genere musicale scelto
      if (genereScelto == "") {
        // è stato scelto All Genres / mostra tutti i cd
        $(".cd").fadeIn();
      } else {
        // nasconde tutti i cd
        $(".cd").hide();
        // mostra solo i cd del genere scelto
        $(".cd[data-genere='" + genereScelto + "']").fadeIn()
      }
    }
  );


//ATTENZIONE: non scrivere codice sotto questa riga
});

// funzione di rendering

function render(data) {
  // recupera l'html del template
  var source = $("#cd-template").html();
  // compila il template
  var template = Handlebars.compile(source);
  // ciclo per creare tanti cd quanti sono gli oggetti dell'array che ci torna l'Api
  for (var i = 0; i < data.length; i++) {
    // manipola i fermaposto del template passando l'oggetto cd[i] e crea il codice HTML da iniettare
    var html = template(data[i]);
    // inietta il codice nell'elemento scelto
    $(".cds-container").append(html);
  }
}
