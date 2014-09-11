	$('#S1_A_1').change(function () {
		var S1_A_1_val = $('#S1_A_1').val();
		if(S1_A_1_val == 1) {return};
		if(S1_A_1_val>1 && S1_A_1_val<=20){
			$.ajax({
				url:CI.site_url+'consultar-miembros',
				type:'POST',
				dataType:'JSON',
				data:{'NUM_VIV':$('#NUM_VIV').val()},
				success:function (num) {
					var totRow = $("#table1 tbody tr").length;
					
					if (S1_A_1_val > totRow) {
						for (var i = totRow+1; i <= S1_A_1_val; i++) {
							addRow(i);
						};
					}else if(parseInt(S1_A_1_val) < totRow){
						for (var i = totRow; i >= S1_A_1_val; i--) {
							if (i>=num) {
								removeRow(i);
							}else{
								$('#S1_A_1').val(num)
							};
						};					
					};
				}
			}) 			
		}else{
			$('#S1_A_1').val('')
		}
	});


	$("#PTANUM").change(function () {
		if($(this).val() == ""){
			$("#MZ").removeAttr('disabled');$("#LOTE").removeAttr('disabled');
		}else{
			$("#MZ").attr('disabled','disabled');$("#LOTE").attr('disabled','disabled');
		}
	});








/************************************************************************************************
/************************************************************************************************
*
*  GUARDADO TAB1
*
/************************************************************************************************
*************************************************************************************************/
$("#frmTab1").validate({
    success: function  (label,element) {
    	$(element).prev('div.message').remove();
    	$(element).removeClass('hgError');
    },
    errorElement: "div",
    wrapper: "div",  // a wrapper around the error message
   errorPlacement: function(error, element) {
        offset = element.offset();
        $(element).addClass('hgError');
        error.append('<div class="arrow-down"></div>')
        error.insertBefore(element);
        error.addClass('message');  // add a class to the wrapper
        error.css('position', 'absolute');
        error.css('left', offset.left );
        error.css('top', offset.top - element.outerHeight());
    },	
	submitHandler:function(){
			ajax_btn("btnTab1",1);
			var frmTab = ["#frmTab1",1];
	    	var formData = $(frmTab[0]).serializeArray(); formData.push({name:'NUM_VIV', value:$('#NUM_VIV').val()});
	    	$.ajax({
	    		url: CI.site_url+'guardar/'+frmTab[1],
	    		type:'POST',
	    		dataType:'JSON',
	    		data:formData,
	    		success:function (argument) {
	    			ajax_btn("btnTab1");
	    			ajax_msg('EXITOSO','Se insertó satisfactoriamente',1);
	    		}
	    	})  

	},

})



/************************************************************************************************
/************************************************************************************************
*
*  GUARDADO TAB2
*
/************************************************************************************************
*************************************************************************************************/
$("#frmTab2").validate({
	//rules:{'S1_A_1_NOM[1]':{required:true},},
    success: function  (label,element) {
    	$(element).prev('div.message').remove();
    	$(element).removeClass('hgError');
    },
    errorElement: "div",
    wrapper: "div",  // a wrapper around the error message
   errorPlacement: function(error, element) {
        offset = element.offset();
        $(element).addClass('hgError');
        error.append('<div class="arrow-down"></div>')
        error.insertBefore(element);
        error.addClass('message');  // add a class to the wrapper
        error.css('position', 'absolute');
        error.css('left', offset.left );
        error.css('top', offset.top - element.outerHeight());
    },

	submitHandler:function(){
			ajax_btn("btnTab2",1);
			var frmTab = ["#frmTab2",2];
	    	var formData = $(frmTab[0]).serializeArray(); formData.push({name:'NUM_VIV', value:$('#NUM_VIV').val()});
	    	$.ajax({
	    		url: CI.site_url+'guardar/'+frmTab[1],
	    		type:'POST',
	    		dataType:'JSON',
	    		data:formData,
	    		success:function (argument) {
	    			ajax_btn("btnTab2");
	    			ajax_msg('EXITOSO','Se insertó satisfactoriamente',1);
	    		},
	    		error:function function_name (argument) {
	    			ajax_btn("btnTab2");
	    			ajax_msg('ERROR','Al consultar al servidor',3);
	    		}
	    	})  

	},

})



/************************************************************************************************
/************************************************************************************************
*
*  GUARDADO TAB3
*
/************************************************************************************************
*************************************************************************************************/
$("#frmTab3").validate({
    success: function  (label,element) {
    	$(element).prev('div.message').remove();
    	$(element).removeClass('hgError');
    },
    errorElement: "div",
    wrapper: "div",  // a wrapper around the error message
   errorPlacement: function(error, element) {
        offset = element.offset();
        $(element).addClass('hgError');
        error.append('<div class="arrow-down"></div>')
        error.insertBefore(element);
        error.addClass('message');  // add a class to the wrapper
        error.css('position', 'absolute');
        error.css('left', offset.left );
        error.css('top', offset.top - element.outerHeight());
    },	
	submitHandler:function(){
			ajax_btn("btnTab3",1);
			var frmTab = ["#frmTab3",3];
	    	var formData = $(frmTab[0]).serializeArray(); formData.push({name:'NUM_VIV', value:$('#NUM_VIV').val()});
	    	$.ajax({
	    		url: CI.site_url+'guardar/'+frmTab[1],
	    		type:'POST',
	    		dataType:'JSON',
	    		data:formData,
	    		success:function (argument) {
	    			ajax_btn("btnTab3");
	    			ajax_msg('EXITOSO','Se insertó satisfactoriamente',1);
	    		}
	    	})  

	},
})


function guardar_Tab(form) {
 	// body...
 } 


	$(function  (argument) {
		$("input.pass").trigger('change');


		$(window).load(function(){

		  $('#loading').fadeOut(2000);

		});

	})