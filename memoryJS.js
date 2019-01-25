
    var numClick = 0;
    var first;
    var second;
    var match = 0;
    var cards = [];
    cards [0] = 'superm.jpg';
    cards [1] = 'batm.jpg';
    cards [2] = 'spiderm.jpg';
    cards [3] = 'spiderm.jpg';
    cards [4] = 'superm.jpg';
    cards [5] = 'batm.jpg';
    cards [6] = 'Flash.jpg';
    cards [7] = 'hulken.jpg';
    cards [8] = 'wonderw.jpg';
    cards [9] = 'wonderw.jpg';
    cards [10] = 'Flash.jpg';
    cards [11] = 'hulken.jpg';

    function newGame(){
      window.location.reload();
    }


    /*Räknar antal klick*/
  $(function(){
      var count = 0;

// Kollar efter klick event på bilder, när en bild trycks så räknar counten.
      $(".imgOnClick").click(function() {
          count++;
         $(".countClick").html("Number of clicks: "+count);

        });
   });

  //Shuffle funktion, lägger bilderna i en array och blandar
  function shuffle(array)
    {
      var currentIndex = array.length, temoraryValue, randomIndex;
      while (0 !== currentIndex)
        {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temoraryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temoraryValue;
        }
        return array;
      }

      var s;
      s = shuffle(cards);
      // den här functionen blir kallad när korten trycks
      function choose(card)
        {
          if (numClick == 0) {
          //här sätter vi bilden vi klickar på
          first = card;
          document.images[card].src = cards[card];
          numClick = 1;
          //document.getElementById('newGameBtn').style.display = 'none';
        }

          else if (numClick == 1)
          {
             numClick = 2;
             second = card;
             document.images[card].src = cards[card];
             // en halv secund innan kortet vänds
            timer = setInterval(control, 500);
          }

           else {
              //bara 2 bilder kommer att visas förens de flippar
              alert("IMG ONCE");
          }
      }



    //här är det vi gör det faktiska "Match"
    function control()
      {
        clearInterval(timer);
        numClick = 0;
        if (cards[second] == cards[first])
        {
           //det som gör så att korten försvinner
          document.images[first].src = "svart.jpg";
          document.images[second].src = "svart.jpg";

          //vad som händer när man få alla rätt
          match++;
             if (match == 6) {
                  $( "table" ).hide();
                  $( "#count1" ).hide();
                  $( ".newGame" ).hide();
                  $( ".home" ).hide();
                  $( ".home2" ).show();
                  $( ".popup-newGame" ).show();
                  $( "#count2" ).show();

                var popup = document.getElementById("myPopup");
                 popup.classList.toggle("show");
               }
        }

              else {
                     document.images[first].src = "alla.jpg";
                      document.images[second].src = "alla.jpg";
                  return;
              }
      }
