<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test View</title>
    <style>
        h1 {
            color:red;
            margin-left: 5px;
        }
        h2 {
            color:blue;
            margin:5px;
        }
        p {
            color:green;
            margin-left:5px;
        }
        .imgBox {
            padding: 0.25rem;
            margin: top 5px;
            margin: bottom 5px;
            border: 1px solid #dee2e6;
            border-radius: 0.25rem;
            width:300px;
        }
        .box {
            border: 1px solid rgba(0,0,0,1.0);
            padding:5px;
            float:left;
            margin: 5px;
            height:280px;
        }
    </style>
</head>
<body>
    <h1>Initial 3D App Test View</h1>
    <?php
        echo $model_1 ."<br>";
        echo $model_2 ."<br>";
        echo $model_3 ."<br>";
        echo $model_4 ."<br>";
        echo $model_5 ."<br>";
        echo $model_6 ."<br>";
    ?>
    <h1>Second 3D App Test View</h1>
    <div class="box">
        <h2><?php echo $model_1 ?></h2>
        <img class="imgBox" src="assets/Renders/<?php echo $image3D_1 ?>.png" alt="image not showing">
    </div>
    <div class="box">
        <h2><?php echo $model_2 ?></h2>
        <img class="imgBox" src="assets/Renders/<?php echo $image3D_2 ?>.png" alt="image not showing">
    </div>
    <div class="box">
        <h2><?php echo $model_3 ?></h2>
        <img class="imgBox" src="assets/Renders/<?php echo $image3D_3 ?>.png" alt="image not showing">
    </div>
    <div class="box">
        <h2><?php echo $model_4 ?></h2>
        <img class="imgBox" src="assets/Renders/<?php echo $image3D_4 ?>.png" alt="image not showing">
    </div>
    <div class="box">
        <h2><?php echo $model_5 ?></h2>
        <img class="imgBox" src="assets/Renders/<?php echo $image3D_5 ?>.png" alt="image not showing">
    </div>
    <div class="box">
        <h2><?php echo $model_6 ?></h2>
        <img class="imgBox" src="assets/Renders/<?php echo $image3D_6 ?>.png" alt="image not showing">
    </div>
</body>
</html>