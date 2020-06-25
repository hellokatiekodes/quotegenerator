//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Her courage was her crown and she wore it like a Queen",
      author: "Atticus"
    },
    {
      quote:
        "Rock bottom became the solid foundation on which I rebuilt my life",
      author: "J.Rowling "
    },
    {
      quote: "Because she competes with no one, no one can compete with her",
      author: "Lao Tzu"
    },
    {
      quote:
        "Darling, you've got magic in your bones, and gold in your soul, don't let anyone treat you like you're ordinary. ",
      author: "iambrillyant"
    },
    {
      quote:
        "She was unstoppable - not because she did not have failures or doubts, but beacuse she continued on despite them",
      author: "Beau Taplin"
    }
  ];

//insert own JS code here: 

  // demo JS code example: 
  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();

