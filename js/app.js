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
   
        urele = 'http://127.0.0.1/integradora/integradora/index.php/welcome/json/id/'+aux2;
        $.ajax({
			url:urele,
			data:{},
			dataType:'JSON'
		}).done(function(data){			
            if(data.textos[0].siete!="")
        {
            console.log(data.textos[0].numero);
            if (data.textos[0].libre == 1)
            { 
                $('#1').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[1].libre == 1)
            { 
                $('#2').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[2].libre == 1)
            { 
                $('#3').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[3].libre == 1)
            { 
                $('#4').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[4].libre == 1)
            { 
                $('#5').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[5].libre == 1)
            { 
                $('#6').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
              if (data.textos[6].libre == 1)
            { 
                $('#7').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[7].libre == 1)
            { 
                $('#8').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[8].libre == 1)
            { 
                $('#9').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[9].libre == 1)
            { 
                $('#10').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[10].libre == 1)
            { 
                $('#11').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[11].libre == 1)
            { 
                $('#12').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[12].libre == 1)
            { 
                $('#13').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[13].libre == 1)
            { 
                $('#14').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[14].libre == 1)
            { 
                $('#15').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[15].libre == 1)
            { 
                $('#16').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[16].libre == 1)
            { 
                $('#17').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[17].libre == 1)
            { 
                $('#18').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[18].libre == 1)
            { 
                $('#19').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[19].libre == 1)
            { 
                $('#20').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[20].libre == 1)
            { 
                $('#21').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[21].libre == 1)
            { 
                $('#22').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[22].libre == 1)
            { 
                $('#23').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[23].libre == 1)
            { 
                $('#24').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[24].libre == 1)
            { 
                $('#25').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[25].libre == 1)
            { 
                $('#26').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[26].libre == 1)
            { 
                $('#27').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[27].libre == 1)
            { 
                $('#28').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[28].libre == 1)
            { 
                $('#29').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[29].libre == 1)
            { 
                $('#30').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[30].libre == 1)
            { 
                $('#31').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[31].libre == 1)
            { 
                $('#32').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[32].libre == 1)
            { 
                $('#33').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
             if (data.textos[33].libre == 1)
            { 
                $('#34').attr('src', 'http://inetvis.cineticket.com.mx/compra/images/seating/25/seat_1.png');
            }
           
            
      
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