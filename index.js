let Symbol="X"
let End = false
for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
      "click", 
      function() {
        if (this.innerHTML === "" && !End) {
          this.innerHTML = Symbol;
          this.classList.add(Symbol.toLowerCase())
        }
          if (Symbol === "X")
      Symbol = "O"
    else
      Symbol = "X"
        
      });
    }
let winner= [
      [1, 2, 3], [4, 5, 6], 
      [7, 8, 9], [1, 4, 7], 
      [2, 5, 8], [3, 6, 9], 
      [1, 5, 9], [3, 5, 7]
    ];
function win(){
  for(let i=0;i<winner.length;i++){
    
  }
}
