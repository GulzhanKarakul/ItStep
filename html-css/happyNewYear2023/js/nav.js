$(function(){
	function Amir()
	{
		$('#Erden').toggleClass('on');
		
		$('#Erden').removeClass('anime');	
	}
	
	function Alan(){
		$('#Erden').toggleClass('anime');
	}
		
	$('#Mac').on('click', function(){
		Alan();
		setTimeout(Amir,2000);
	})
	$('#Nikita').on('click', function(){
		Alan();
		setTimeout(Amir,2000);
	})

	
	function Sub(){
		$('.sub-menu').toggleClass('actOn');
	}
	$('.act').on('click', function(){
	Sub();})

	function Messi(){
		$('#OnOff').toggleClass('OnOff');
	}
	
	$('#Mac').on('click', function(){

	Messi();
	})
	
	$('#Nikita').on('click', function(){
	Messi();
	})
})


