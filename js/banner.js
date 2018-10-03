$(function(){

	$.ajax({
		type:"get",
		url:"js/new_file.json",
		async:true,
		dataType:'json',
		data:'',
		success:function(data){
			
		var ismobile=$(window).width()<768?true:false;
		
		var ponithtml=  template("ponitTemplate",{list:data});
		var Imagehtml=	template("ImageTemplate",{list:data,isM:ismobile});
		
		$(".carousel-indicators").html( ponithtml);
		$(".carousel-inner").html( Imagehtml);
		}
	});
	
	
	
	
	
});