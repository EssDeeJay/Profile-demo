var skills={
    ht: 95,
    ui: 75,
    fw: 80,
    sl: 70,
    mr: 85,
    cs: 70,
    gt: 90,
    jx: 80,
    wp: 70
  };
  
  $.each(skills, function(key,value){
    var skillBar = $("." + key);
    skillBar.animate(
    {
      width: value + "%"
    },
      3000,
      function(){
        $(".speech-bubble").fadeIn();
      }
    );
  });