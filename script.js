
                       
     var letterGuessed= ``;
     var startBtn = document.querySelector("#startBtn")
     var answerSpan = document.querySelector("#answerSpan")
     // var keyPress = document.addEventListener("keypress", function(event){});
     
     startBtn.addEventListener("click", function(event){
         var answer = words[Math.floor(Math.random() * words.length)];
         var answerArray = answer.split("");
         var chosenWord = answer.toString();
         event.preventDefault()
         console.log(answerArray, chosenWord)
         
    for (i =0 ; i < answerArray.length; i++){ 
        answerSpan.innerHTML += " _ "
         
    };

});
