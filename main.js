$(document).ready(function() {

  // Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
  // https://flynn.boolean.careers/exercises/api/array/music
  // L'api ci restituirà i dischi musicali che dovremo stampare a schermo con Handlebars.

  // chiamata ajax all'API con endpoint che ritorna i dischi
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

  // function scegliGenere() {
  //   var genereScelto = $(".sel-genere").val();
  //   console.log(genereScelto);
  // }
  //

  // al CHANGE del genere musicale scelto
  $(".sel-genere").change(
    function(){

      // recupera il genere musicale scelto
      var genereScelto = $(this).val();
      // mostra o nasconde il cd a seconda del genere scelto
      $(".cd .genre").each(function () {
          if (genereScelto == "All Genres") {
            $(this).parent().show();          
          } else if ($(this).text() == genereScelto) {
            $(this).parent().show();
          } else {
            $(this).parent().hide();
          }
        }
      );

    }
  );





//ATTENZIONE: non scrivere codice sotto questa riga
});
