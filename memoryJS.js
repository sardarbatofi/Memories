
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
     



// Check for click event on target photo. Increment count and display new count.
      $(".imgOnClick").click(function() {
          count++;
         $("#countClick").html("Number of clicks:"+count); 
       
        });
     
  });



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
      // den här functionen blir called när vi klickar på korten
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
        //om det första kortet är lika med det andra
        match++;
        if (match == 6) {
         var popup = document.getElementById("myPopup");
         popup.classList.toggle("show");
         $("#clicks").html("Number of clicks:"+count); 


        }
      }
      else {
        document.images[first].src = "alla.jpg";
        document.images[second].src = "alla.jpg";
        return;
      }
}
