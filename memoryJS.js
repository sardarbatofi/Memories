
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
      function choose(card)
      {
        if (numClick == 0) {
        first = card;
        document.images[card].src = cards[card];
        numClick = 1;
      }
      else if (numClick == 1)
      {
        numClick = 2;
        second = card;
        document.images[card].src = cards[card];
        timer = setInterval(control, 500);
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
          alert("Winner");
          location.reload();
        }
      }
      else {
        document.images[first].src = "alla.jpg";
        document.images[second].src = "alla.jpg";
        return;
      }
}
