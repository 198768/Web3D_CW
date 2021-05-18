var counter = 0;

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();   
});

$(document).ready(function() {
	
	selectPage();
	
});

function selectPage() {

	$('#home').show();
	$('#about').hide();
	$('#coke').hide();
    $('#sprite').hide();
	$('#pepper').hide();
	$('#zero').hide();
    $('#fanta').hide();
    $('#costa').hide();
	$('#interaction').hide();
	$('#description_coke').hide();
	$('#description_sprite').hide(); 
	$('#description_pepper').hide();
	$('#description_zero').hide();
	$('#description_fanta').hide();
	$('#description_costa').hide();


	$('.navHome').click(function(){
		$('#home').show();
		$('#about').hide();
		$('#coke').hide();
        $('#sprite').hide();
		$('#pepper').hide();
		$('#zero').hide();
    	$('#fanta').hide();
    	$('#costa').hide();
		$('#interaction').hide();
		$('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').hide();
	});

	$('#navAbout').click(function(){
		$('#home').hide();
		$('#about').show();
		$('#coke').hide();
        $('#sprite').hide();
		$('#pepper').hide();
		$('#zero').hide();
    	$('#fanta').hide();
    	$('#costa').hide();
		$('#interaction').hide();
		$('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').hide();
	});

	$('.navCoke').click(function(){
		$('#home').hide();
		$('#about').hide();
        $('#coke').show();
        $('#sprite').hide();
		$('#pepper').hide();
		$('#zero').hide();
    	$('#fanta').hide();
    	$('#costa').hide();
		$('#interaction').show(); 
		$('#description_coke').show();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').hide();
		$("#model3DTitle_coke").show();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").show();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").hide();
    });
    
    $('.navSprite').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#coke').hide();
        $('#sprite').show();
		$('#pepper').hide();
		$('#zero').hide();
    	$('#fanta').hide();
    	$('#costa').hide();
		$('#interaction').show(); 
		$('#description_coke').hide();
		$('#description_sprite').show(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').hide();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").show();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").show();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").hide(); 
    });
    
    $('.navPepper').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#coke').hide();
        $('#sprite').hide();
		$('#pepper').show();
		$('#zero').hide();
    	$('#fanta').hide();
    	$('#costa').hide();
		$('#interaction').show(); 
		$('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').show();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').hide();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").show();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").show();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").hide(); 
	});

	$('.navZero').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#coke').hide();
        $('#sprite').hide();
		$('#pepper').hide();
		$('#zero').show();
    	$('#fanta').hide();
    	$('#costa').hide();
		$('#interaction').show(); 
		$('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').show();
		$('#description_fanta').hide();
		$('#description_costa').hide();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").show();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").show();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").hide(); 
	});

	$('.navFanta').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#coke').hide();
        $('#sprite').hide();
		$('#pepper').hide();
		$('#zero').hide();
    	$('#fanta').show();
    	$('#costa').hide();
		$('#interaction').show(); 
		$('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').show();
		$('#description_costa').hide();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").show();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").show();
		$("#creationMethod_costa").hide(); 
	});

	$('.navCosta').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#coke').hide();
        $('#sprite').hide();
		$('#pepper').hide();
		$('#zero').hide();
    	$('#fanta').hide();
    	$('#costa').show();
		$('#interaction').show(); 
		$('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').show();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").show();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").show(); 
	});
}


function cokeDescription() {
	$("button").click(function(){
		
		$('#description_coke').show();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').hide();
		$("#model3DTitle_coke").show();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").show();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").hide();

    }); 
}

function spriteDescription() {
    $("button").click(function(){

        $('#description_coke').hide();
		$('#description_sprite').show(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').hide();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").show();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").show();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").hide();
    }); 
}

function pepperDescription() {
    $("button").click(function(){

        $('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').show();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').hide();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").show();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").show();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").hide();
    }); 
}

function zeroDescription() {
    $("button").click(function(){

        $('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').show();
		$('#description_fanta').hide();
		$('#description_costa').hide();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").show();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").show();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").hide();
    }); 
}

function fantaDescription() {
    $("button").click(function(){

        $('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').show();
		$('#description_costa').hide();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").show();
		$("#model3DTitle_costa").hide();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").show();
		$("#creationMethod_costa").hide();
    }); 
}

function costaDescription() {
    $("button").click(function(){

        $('#description_coke').hide();
		$('#description_sprite').hide(); 
		$('#description_pepper').hide();
		$('#description_zero').hide();
		$('#description_fanta').hide();
		$('#description_costa').show();
		$("#model3DTitle_coke").hide();
		$("#model3DTitle_sprite").hide();
		$("#model3DTitle_pepper").hide();
		$("#model3DTitle_zero").hide();
		$("#model3DTitle_fanta").hide();
		$("#model3DTitle_costa").show();
		$("#creationMethod_coke").hide();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide();
		$("#creationMethod_zero").hide();
		$("#creationMethod_fanta").hide();
		$("#creationMethod_costa").show();
    }); 
}

function changeLook() {
    counter += 1;
    switch (counter) {
        case 1:
            document.getElementById('body').style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = 'red';
            document.getElementById('footer').style.backgroundColor = 'red';
            break;
        case 2:
            document.getElementById('body').style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = '#204074';
            document.getElementById('footer').style.backgroundColor = '#17913C';
            break;
        case 3:
            document.getElementById('body').style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = '#FF8302';
            document.getElementById('footer').style.backgroundColor = '#010A8D';
            break;
        case 4:
            counter = 0;
            document.getElementById('body').style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = '#760000';
            document.getElementById('footer').style.backgroundColor = '#760000';
            break;
    }
}

function changeBack() {
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('header').style.backgroundColor = 'black';
    document.getElementById('footer').style.backgroundColor = 'black';
}