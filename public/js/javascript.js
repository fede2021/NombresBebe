$(".sexo").on("change", function(){
  var opcion=$(this).val();


  switch(opcion){
    case "0":{
    $(".foto").attr("src","imagenes/img.png");
    break;
    }
    case "1":{
      $(".foto").attr("src","imagenes/fotobebe1.jpg");
      break;
    }
    case "2":{
      $(".foto").attr("src","imagenes/fotobebe2.jpg");
      break;
  }

}



});
