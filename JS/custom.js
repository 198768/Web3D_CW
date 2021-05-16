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
	$('#interaction').hide();
	$('#cokeDescription').hide();
	$('#spriteDescription').hide(); 
	$('#pepperDescription').hide(); 


	$('navHome').click(function(){
		$('#home').show();
		$('#about').hide();
		$('#coke').hide();
        $('#sprite').hide();
        $('#pepper').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 	  
	});

	$('#navAbout').click(function(){
		$('#home').hide();
		$('#about').show();
		$('#coke').hide();
        $('#sprite').hide();
        $('#pepper').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 	  
	});

	$('.navCoke').click(function(){
		$('#home').hide();
		$('#about').hide();
        $('#coke').show();
        $('#sprite').hide();
        $('#pepper').hide();
		$('#interaction').show(); 
		$('#cokeDescription').show();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide();
		$("#web3DModelTitle_coke").show();
		$("#web3DModelTitle_coke").hide();
		$("#web3DModelTitle_coke").hide();
		$("#creationMethod_coke").show();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide(); 
    });
    
    $('.navSprite').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#coke').hide();
        $('#sprite').show();
        $('#pepper').hide();
		$('#interaction').show(); 
		$('#cokeDescription').show();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide();
		$("#web3DModelTitle_coke").show();
		$("#web3DModelTitle_coke").hide();
		$("#web3DModelTitle_coke").hide();
		$("#creationMethod_coke").show();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide(); 
    });
    
    $('.navPepper').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#coke').hide();
        $('#sprite').hide();
        $('#pepper').show();
		$('#interaction').show(); 
		$('#cokeDescription').show();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide();
		$("web3DModelTitle_coke").show();
		$("#web3DModelTitle_sprite").hide();
		$("#web3DModelTitle_pepper").hide();
		$("#creationMethod_coke").show();
		$("#creationMethod_sprite").hide();
		$("#creationMethod_pepper").hide(); 
	});
}


function cokeDescription() {
	$("button").click(function(){
		
		$("#cokeDescription").show();
        $("#spriteDescription").hide();
		$("#pepperDescription").hide();
		
		$("#x3dModelTitle_coke").show();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_pepper").hide();

		$("#x3dCreationMethod_coke").show();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_pepper").hide();

    }); 
}

function spriteDescription() {
    $("button").click(function(){

        $("#cokeDescription").hide();
        $("#spriteDescription").show();
		$("#pepperDescription").hide();
		
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_sprite").show();
		$("#x3dModelTitle_pepper").hide();

		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_sprite").show();
		$("#x3dCreationMethod_pepper").hide();
    }); 
}

function pepperDescription() {
    $("button").click(function(){

        $("#cokeDescription").hide();
        $("#spriteDescription").hide();
		$("#pepperDescription").show();
		
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_pepper").show();

		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_pepper").show();
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