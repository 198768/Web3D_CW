$(document).ready(function () {
    $.getJSON('model/data.json', function (jsonObj) {
        //Main text of home page
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subtitle_home').html('<h3>' + jsonObj.pageTextData[0].subtitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');
        //Main text for first row of cards on home page
        $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '</h2>');
        $('#subtitle_left').html('<h3>' + jsonObj.pageTextData[1].subtitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[1].description + '</p>');
        
        $('#title_centre').html('<h2>' + jsonObj.pageTextData[2].title + '</h2>');
        $('#subtitle_centre').html('<h3>' + jsonObj.pageTextData[2].subtitle + '</h3>');
        $('#description_centre').html('<p>' + jsonObj.pageTextData[2].description + '</p>');

        $('#title_right').html('<h2>' + jsonObj.pageTextData[3].title + '</h2>');
        $('#subtitle_right').html('<h3>' + jsonObj.pageTextData[3].subtitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[3].description + '</p>');
        //Main text for second row of cards on home page
        $('#title_bottom_left').html('<h2>' + jsonObj.pageTextData[4].title + '</h2>');
        $('#subtitle_bottom_left').html('<h3>' + jsonObj.pageTextData[4].subtitle + '</h3>');
        $('#description_bottom_left').html('<p>' + jsonObj.pageTextData[4].description + '</p>');

        $('#title_bottom_centre').html('<h2>' + jsonObj.pageTextData[5].title + '</h2>');
        $('#subtitle_bottom_centre').html('<h3>' + jsonObj.pageTextData[5].subtitle + '</h3>');
        $('#description_bottom_centre').html('<p>' + jsonObj.pageTextData[5].description + '</p>');

        $('#title_bottom_right').html('<h2>' + jsonObj.pageTextData[6].title + '</h2>');
        $('#subtitle_bottom_right').html('<h3>' + jsonObj.pageTextData[6].subtitle + '</h3>');
        $('#description_bottom_right').html('<p>' + jsonObj.pageTextData[6].description + '</p>');
        //Main text for 3D model pages
        console.log(jsonObj);
        console.log(jsonObj.pageTextData);
        console.log(jsonObj.pageTextData[7]);
        console.log(jsonObj.pageTextData[7].web3DModelTitle);

        $('#model3DTitle_coke').html('<h2>' + jsonObj.pageTextData[7].web3DModelTitle + '</h2>');
		$('#creationMethod_coke').html('<p>' + jsonObj.pageTextData[7].creationMethod + '</p>');
        $('#title_coke').html('<h2>' + jsonObj.pageTextData[7].title + '</h2>');
        $('#subtitle_coke').html('<h3>' + jsonObj.pageTextData[7].subtitle + '</h3>');
        $('#description_coke').html('<p>' + jsonObj.pageTextData[7].description + '</p>');

        $('#model3DTitle_sprite').html('<h2>' + jsonObj.pageTextData[8].web3DModelTitle + '</h2>');
		$('#creationMethod_sprite').html('<p>' + jsonObj.pageTextData[8].creationMethod + '</p>');
        $('#title_sprite').html('<h2>' + jsonObj.pageTextData[8].title + '</h2>');
        $('#subtitle_sprite').html('<h3>' + jsonObj.pageTextData[8].subtitle + '</h3>');
        $('#description_sprite').html('<p>' + jsonObj.pageTextData[8].description + '</p>');

        $('#model3DTitle_pepper').html('<h2>' + jsonObj.pageTextData[9].web3DModelTitle + '</h2>');
		$('#creationMethod_pepper').html('<p>' + jsonObj.pageTextData[9].creationMethod + '</p>');
        $('#title_pepper').html('<h2>' + jsonObj.pageTextData[9].title + '</h2>');
        $('#subtitle_pepper').html('<h3>' + jsonObj.pageTextData[9].subtitle + '</h3>');
        $('#description_pepper').html('<p>' + jsonObj.pageTextData[9].description + '</p>');

        $('#model3DTitle_zero').html('<h2>' + jsonObj.pageTextData[10].web3DModelTitle + '</h2>');
		$('#creationMethod_zero').html('<p>' + jsonObj.pageTextData[10].creationMethod + '</p>');
        $('#title_zero').html('<h2>' + jsonObj.pageTextData[10].title + '</h2>');
        $('#subtitle_zero').html('<h3>' + jsonObj.pageTextData[10].subtitle + '</h3>');
        $('#description_zero').html('<p>' + jsonObj.pageTextData[10].description + '</p>');

        $('#model3DTitle_fanta').html('<h2>' + jsonObj.pageTextData[11].web3DModelTitle + '</h2>');
		$('#creationMethod_fanta').html('<p>' + jsonObj.pageTextData[11].creationMethod + '</p>');
        $('#title_fanta').html('<h2>' + jsonObj.pageTextData[11].title + '</h2>');
        $('#subtitle_fanta').html('<h3>' + jsonObj.pageTextData[11].subtitle + '</h3>');
        $('#description_fanta').html('<p>' + jsonObj.pageTextData[11].description + '</p>');

        $('#model3DTitle_costa').html('<h2>' + jsonObj.pageTextData[12].web3DModelTitle + '</h2>');
		$('#creationMethod_costa').html('<p>' + jsonObj.pageTextData[12].creationMethod + '</p>');
        $('#title_costa').html('<h2>' + jsonObj.pageTextData[12].title + '</h2>');
        $('#subtitle_costa').html('<h3>' + jsonObj.pageTextData[12].subtitle + '</h3>');
        $('#description_costa').html('<p>' + jsonObj.pageTextData[12].description + '</p>');
        //Main text for 3D image gallery
        $('.gallery_title').html('<h4>' + jsonObj.pageTextData[13].galleryTitle + '</h4>');
        $('.gallery_description').html('<p>' + jsonObj.pageTextData[13].galleryDescription + '</p>');
        //Main text for camera view buttons
        $('.camera_title').html('<h4>' + jsonObj.pageTextData[14].cameraTitle + '</h4>');
		$('.camera_subtitle').html('<p>' + jsonObj.pageTextData[14].cameraSubtitle + '</p>');
    });
});