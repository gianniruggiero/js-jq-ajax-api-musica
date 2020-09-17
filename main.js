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
                // recupera i dati dell'oggetto disco che risponde l'API
                var cd = data.response;
                for (var i = 0; i < cd.length; i++) {
                  // recupera l'html del template
                  var source = $("#cd-template").html();
                  // compila il template
                  var template = Handlebars.compile(source);
                  // manipola i fermaposto del template passando l'oggetto cd[i] e crea il codice HTML da iniettare
                  var html = template(cd[i]);
                  // inietta il codice nell'elemento scelto
                  $(".cds-container").append(html);
                }
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
      // mostra o nasconde il cd a seconda del genere musicale scelto
      $(".cd .genre").each(function () {
          if (genereScelto == "All Genres") {
            // ALL GENRES mostra tutti i cd
            $(this).parent().show();
          } else if ($(this).text() == genereScelto) {
            // se l'elemento this in esame ha genere uguale a quello scelto, lo mostra
            $(this).parent().show();
          } else {
            // se l'elemento this in esame ha genere diverso da quello scelto, lo nasconde
            $(this).parent().hide();
          }
        }
      );

    }
  );




//ATTENZIONE: non scrivere codice sotto questa riga
});
