var app = {
	initialize: function () {
		app.bindEvents();
		app.mainCode();
        function getQueryVariable(variable)
        {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
        }
        aux2=getQueryVariable("id");
        idOri= getQueryVariable("idOrigen");
        idDes= getQueryVariable("idDestino");
        fechaSali= getQueryVariable("fechaSalida");
        urele = 'http://127.0.0.1/integradora/integradora/index.php/welcome/busqueda/idOrigen/'+idOri+'/idDestino/'+idDes+'/fechaSalida/'+fechaSali;
        $.ajax({
			url:urele,
			data:{},
			dataType:'JSON'
		}).done(function(data){			
       
           arregloo = data.textos;
          tamaño = arregloo.length;
           guardado ="";
          
 guardado=guardado+'<table style="width:100%" align="center" class="table"><tr><td>Hora de Salida</td><td>Fecha de Llegada</td><td>Hora de Llegada</td><td></td></tr>';
          for (i = 0; i < tamaño; i++) { 
             // $('#tabla').append('<table style="width:100%" align="center" ><tr><td>'+arregloo[i].horaSalida+'</td><td>'+arregloo[i].fechaLlegada+'</td><td>'+arregloo[i].horaLlegada+'</td><td>    <a href="asientos.html?id='+arregloo[i].idViaje+'" id="btn_buscar" role="button">Buscar</td></tr>');
              
   guardado+='<tr><td>'+arregloo[i].horaSalida+'</td><td>'+arregloo[i].fechaLlegada+'</td><td>'+arregloo[i].horaLlegada+'</td><td>    <a href="asientos.html?id='+arregloo[i].idViaje+'" id="btn_buscar" role="button">Buscar</td></tr>';
              
          }
             
            guardado+='</table>';
            
            $('#tabla').append(guardado);
 
           
		});
	},
	bindEvents: function () { 		
	
	},
	btnSaludo_click: function() {
	
	},
	btnButton1_click: function () {		
      
		

	},	
    btn1_click: function ()
    {
       
        
        
     
  },  
	
	mainCode: function () { 
        
        
	
	}
};

$(document).ready(function () {
	app.initialize();
});