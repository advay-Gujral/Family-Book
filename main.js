var images = [
"EP.jpg",
"MP.jpg",
"MMP.jpg",
"PPP.jpg"
  ];
  
  var i = 0;
  function nextslide () {
    
    if (i  == 4) 
    {
    i=0 ;  
    }
    
    document.getElementById ("album"). src = images [i];
    i++;
  }