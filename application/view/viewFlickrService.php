<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test View - Flickr Web Service</title>

    <!-- FlickrService CSS -->
    <link rel="stylesheet" href="/Web3D_CW/CSS/flickrService.css">

</head>
<body>

    <h1>Flickr Web Service</h1>
    <h2> Search on Flickr Feed</h2>
    <div class="textInput">
        <input type="text" value="Sprite" id="txt" />
    </div>

    <div class="btn">
        <button onClick="loadImages()">Search</button>
    </div>

    <div class="box">
        <h1 id="title"></h1>
        <h2 id="link"></h2>
        <p id="description"></p>
        <p id="modified"></p>
        <p id="generator"></p>
        <div id=images></div>
    </div>

    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="/Web3D_CW/JS/flickrService.js"></script>

</body>
</html>