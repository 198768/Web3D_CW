$(document).ready(function () {
    $.getJSON('/Web3D_CW/model/data.json', function (json0bj) { // /Web3D_CW/model/data.json
        $('#title_home').html('<h2>' + json0bj.pageTextData[0].title + '<h2>');
        $('#subtitle_home').html('<h3>' + json0bj.pageTextData[0].subtitle + '</h3>');
        $('#description_home').html('<p>' + json0bj.pageTextData[0].description + '</p>');
        
        $('#title_left').html('<h2>' + json0bj.pageTextData[1].title + '<h2>');
        $('#subtitle_left').html('<h3>' + json0bj.pageTextData[1].subtitle + '</h3>');
        $('#description_left').html('<p>' + json0bj.pageTextData[1].description + '</p>');

        $('#title_centre').html('<h2>' + json0bj.pageTextData[2].title + '<h2>');
        $('#subtitle_centre').html('<h3>' + json0bj.pageTextData[2].subtitle + '</h3>');
        $('#description_centre').html('<p>' + json0bj.pageTextData[2].description + '</p>');

        $('#title_right').html('<h2>' + json0bj.pageTextData[3].title + '<h2>');
        $('#subtitle_right').html('<h3>' + json0bj.pageTextData[3].subtitle + '</h3>');
        $('#description_right').html('<p>' + json0bj.pageTextData[3].description + '</p>');

        $('#3DModelTitle_coke').html('<h2>' + jsonObj.pageTextData[4].web3DModelTitle + '<h2>');
		$('#creationMethod_coke').html('<p>' + jsonObj.pageTextData[4].creationMethod + '<p>');
        $('#title_coke').html('<h2>' + json0bj.pageTextData[4].title + '<h2>');
        $('#subtitle_coke').html('<h3>' + json0bj.pageTextData[4].subtitle + '</h3>');
        $('#description_coke').html('<p>' + json0bj.pageTextData[4].description + '</p>');

        $('#3DModelTitle_sprite').html('<h2>' + jsonObj.pageTextData[5].web3DModelTitle + '<h2>');
		$('#creationMethod_sprite').html('<p>' + jsonObj.pageTextData[5].creationMethod + '<p>');
        $('#title_sprite').html('<h2>' + json0bj.pageTextData[5].title + '<h2>');
        $('#subtitle_sprite').html('<h3>' + json0bj.pageTextData[5].subtitle + '</h3>');
        $('#description_sprite').html('<p>' + json0bj.pageTextData[5].description + '</p>');

        $('#3DModelTitle_pepper').html('<h2>' + jsonObj.pageTextData[6].web3DModelTitle + '<h2>');
		$('#creationMethod_pepper').html('<p>' + jsonObj.pageTextData[6].creationMethod + '<p>');
        $('#title_pepper').html('<h2>' + json0bj.pageTextData[6].title + '<h2>');
        $('#subtitle_pepper').html('<h3>' + json0bj.pageTextData[6].subtitle + '</h3>');
        $('#description_pepper').html('<p>' + json0bj.pageTextData[6].description + '</p>');
    });
});