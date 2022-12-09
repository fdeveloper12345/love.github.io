const shedegi = document.getElementById("migeba");
const sheniBedi = document.getElementById("shenibedi");


const phrases = [
  "ევა ",
  "ქრისტი ლაბაძე ",
  " მარიამი",
   " ელენე ",
   "ანა",
     "ლილე",
     "ნინო ", 
     "ბარბარე", 
      "ანასტასია", 
       "სალომე", 
        "თაია", 
        "ნია", 
        "ლიზი ", 
        "სესილი ", 
        "ნიტა ", 
        " კირა  ",
        "  ალექსანდრა ", 
        "ანამარია", 
        "ნენე", 
        "გვანცა", 
        "მართა ", 
        "ლიკა ",        
        " ნუცა ", 
        "ნათია ",       
        "ნინი ",
        "თამარ",  
        "თეკლა",  
        "ანი ", 
        "კატო",
        "თათია ",                            
        "ქეთი ",
                                         








];




sheniBedi.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * phrases.length);
  let randomPhrase = phrases[randomNum];
  shedegi.innerText = randomPhrase;
  paatasay.play();


  
  
});



