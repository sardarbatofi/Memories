
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

//vi lägger alla bilder i en array, vi har 6 olika bilder
    function newGame(){
      
      window.location.reload();
    }
    /*Räknar antal klick*/
  $(function(){
      var count = 0;


// Check for click event on target photo. Increment count and display new count.
      $(".imgOnClick").click(function() {
          count++;
         $("#countClick").html("Number of clicks is "+count);
        });

  });


//här shufflar vi arrayen men hjälp av shuffle algorithm Fisher-Yates
      function shuffle(array)
       {
        var currentIndex = array.length, temoraryValue, randomIndex;

// Medan det fortfarande finns element att blanda ...
        while (0 !== currentIndex)
        {

// Välj ett återstående element ...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;


// och byt ut det med det aktuella elementet.
          temoraryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temoraryValue;
        }
        return array;
      }

      var s;
      s = shuffle(cards);
      function choose(card)
      {

        if (numClick == 0) {
        first = card;
        document.images[card].src = cards[card];
        numClick = 1;
        document.getElementById('newGameBtn').style.display = 'none';
      }
      else if (numClick == 1)
      {
        numClick = 2;
        second = card;
        document.images[card].src = cards[card];
        timer = setInterval(control, 500); // timer för att vända korten
      }
      else {
        alert("IMG ONCE");
      }
    }
    function control()
    {
      clearInterval(timer);
      numClick = 0;
      if (cards[second] == cards[first])
      {
        match++;
        if (match == 6) {
          document.getElementById('newGameBtn').style.display = 'inline';
          document.getElementById('container').style.backgroundColor = 'green';


        }
      }
      else {
        document.images[first].src = "alla.jpg";
        document.images[second].src = "alla.jpg";
        return;
      }
}
