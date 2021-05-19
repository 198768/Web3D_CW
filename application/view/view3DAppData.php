<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Model Data</title>
    <style>
        h1 {
            color:red;
            margin-left: 5px;
        }
        h2 {
            color:blue;
            margin: 5px;
        }
        p {
            color:green;
            margin-left:5px;
        }
        .imgBox {
            padding: 0.25rem;
            margin-top: 5px;
            margin-bottom:5px;
            border:1px solid #dee2e6;
            border-radius:0.25rem;
            width:300px;
        }
        .boxModel {
            border: 3px solid rgba(0,1,0,1.0);
            padding:5px;
            float:left;
            margin:5px;
            width:auto;
            height: auto;
        }
        .boxText {
            border: 1px solid rgba(1,0,0,1.0);
            padding: 5px;
            float: left;
            margin: 5px;
            width: 220px;
            height:auto;
        }
    </style>
</head>
<body>
    <h1>Model_3D Data returned from the SQLite database</h1>
    <?php for ($i=0; $i <count ($data); $i++) {  ?>
        <div class="boxModel">
            <div class="boxText">
                <h2><?php echo $data[$i]['model3DTitle']?></h2>
            </div>
            <div class="boxText">
                <h2><?php echo $data[$i]['creationMethod']?></h2>
            </div>
            <div class="boxText">
                <h2><?php echo $data[$i]['modelTitle']?></h2>
            </div>
            <div class="boxText">
                <h2><?php echo $data[$i]['modelSubtitle']?></h2>
            </div>
            <div class="boxText">
                <h2><?php echo $data[$i]['modelDescription']?></h2>
            </div>
        </div>
    <?php } ?>
</body>
</html>