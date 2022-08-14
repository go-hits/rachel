//variables
     let count1 = 0;
     let count2 = 0;
     let count3 = 0;
     let count4 = 0;
     
      function player1(){
       count1 = 1;
       audio1.play();
       playbtn.style.display = "none";
       pausebtn.style.display = "block";       
      }
      function pauser1(){
       count1 = 0;
       audio1.pause()
       pausebtn.style.display = "none";
       playbtn.style.display = "block";
      }