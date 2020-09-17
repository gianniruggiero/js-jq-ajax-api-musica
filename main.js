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
                console.log(data);
                // recupera i dati dell'oggetto disco che risponde l'API
                var cd = data.response;
                console.log(cd.length);
                for (var i = 0; i < cd.length; i++) {
                  // recupera l'html del template
                  var source = $("#cd-template").html();
                  // compila il template
                  var template = Handlebars.compile(source);
                  // manipola i fermaposto del template passando l'oggetto cd[i] e crea il codice HTML da iniettare
                  var html = template(cd[i]);
                  console.log(cd[i]);
                  console.log("html: " + html);
                  // inietta il codice nell'elemento scelto
                  $(".cds-container").append(html);
                }
              },
    error: function (richiesta, stato, errore) {
            // messaggio di errore
            alert("Attenzione, c'è un errore. " + errore);
            }
   }
  );





//ATTENZIONE: non scrivere codice sotto questa riga
});
