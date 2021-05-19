<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drinks Image View</title>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
    <h1 style="margin:5px; padding:10px;">Choose a drink brand to see more details</h1>
    <strong style="margin:5px; padding:10px;">Select a brand name: </strong>
    <form style="margin:5px; padding:10px;">
        <select id="select">
            <?php
                for($i=0; $i <= count($data); $i++)
                    echo '<option value="' . $data[$i] . '">'. $data[$i] . '</option>';
            ?>
        </select>
    </form>
    <div id="placeholder" style="margin:5px; padding:10px;">Insert Data Here</div>

    <script>
        $(document).ready(function() {
            $('#select').change(function() {
                var model = $(this).val();
                console.log('Drink Model:', model, 'has been selected');
                var str = "";
                $("select option:selected").each(function() {
                    str += "<div><strong>Brink Brand: </strong>" + $(this).text()  "</div>" + "</br>";
                    console.log("HTML Title is: ", $(this).text());
                    var selection = $(this).text();
                    console.log("Selected Brand Model: ", selection);
                    var brandUrl = "/Web3D_CW/application/model/modelDrinkDetails.php?brand=" + selection;
                    console.log("URL to PHP Model is: ", brandUrl);
                    var debugUrl = "/Web3D_CW/application/model/phpDebug.php";
                    $.getJSON(brandUrl)
                        .done(function(json) {
                            console.log("Web service response for drink brand data: ", json);
                            str += "<div width=90% style='float: left; margin:5px; border:1px solid; border-color:blue; padding:10px;'>";
                            for(var i=0; i<json.length; i++) {
                                str += 
                                    "<div width=15% style='float: left; color:blue; margin:5px; border:1px solid; border-color:red; padding:10px;'>" + json[i].brand + "</div>" +
                                    "<div width=15% style='float: left; color:blue; margin:5px; border:1px solid; border-color:red; padding:10px;'>" + json[i].model3DTitle + "</div>" +
                                    "<div width=15% style='float: left; color:blue; margin:5px; border:1px solid; border-color:red; padding:10px;'>" + json[i].creationMethod + "</div>" +
                                    "<div width=15% style='float: left; color:blue; margin:5px; border:1px solid; border-color:red; padding:10px;'>" + json[i].modelTitle + "</div>" +
                                    "<div width=15% style='float: left; color:blue; margin:5px; border:1px solid; border-color:red; padding:10px;'>" + json[i].modelSubtitle + "</div>" +
                                    "<div width=15% style='float: left; color:blue; margin:5px; border:1px solid; border-color:red; padding:10px;'>" + json[i].modelDescription + "</div>";
                                str +=
                                    "<div width=30% style='float: left; margin:5px; border:1px solid; border-color:green; border-radius:10px; padding:10px;'>" +
                                    "<img width=300px src='/Web3D_CW/assets/Renders/" + json[i].brand + ".png'></img>" +
                                    "</div>";
                            }
                            str += "</div>";
                            document.getElementById("placeholder").innerHTML=str;                           
                        })
                        .fail(function() {
                            console.log("viewDrinks JS Handler: Server returned an Error, trap this in your PHP server code");
                        });
                });
            });
        });
    </script>
</body>
</html>