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
   
        urele = 'http://127.0.0.1/integradora/integradora/index.php/welcome/alldestinos';
        $.ajax({
			url:urele,
			data:{},
			dataType:'JSON'
		}).done(function(data){			
       
           arreglo = data.textos;
           long = arreglo.length;
       
       for (i = 0; i < long; i++) { 
   $("#origen").append(new Option(arreglo[i].destino, i+1));
            $("#destino").append(new Option(arreglo[i].destino, i+1));
    }

          
           
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