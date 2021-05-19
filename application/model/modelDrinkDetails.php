<?php
include 'application/debug/ChromePhp.php';
ChromePhp::log('modelDrinkDetails.php: Hello World');
ChromePhp::log($_SERVER);
ChromePhp::warn('modelDrinkDetails.php: Get Brand Details');
$brandName = $_GET['brand'];
ChromePhp::warn('modelDrinkDetails.php: Make a connection to test1.db');
        try {
            $dbHandle = new PDO('/db/test1.db', 'user', 'password', array(
                                                                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                                                                PDO::ATTR_EMULATE_PREPARES => false,
            ));
            ChromePhp::warn('modelDrinkDetails.php: Connected to test1.db');
            ChromePhp::warn('modelDrinkDetails.php: Prepare PDO SQL statement');
            $sql = 'SELECT * FROM Model_3D WHERE brand = "' . $brandName . '"';
            ChromePhp::warn($sql);
            ChromePhp::warn('modelDrinkDetails.php: PDO query() SQL statement');
            $stmt = $dbHandle->query($sql);
            ChromePhp::warn($stmt);
            $result = null;
            $i=0;
            while ($data = $stmt->fetch()) {
                ChromePhp::warn('modelDrinkDetails.php: PDO fetch() data from test1.db');
                ChromePhp::warn($data);
                $result[$i]['brand'] = $data['brand'];
                $result[$i]['model3DTitle'] = $data['model3DTitle'];
                $result[$i]['creationMethod'] = $data['creationMethod'];
                $result[$i]['modelTitle'] = $data['modelTitle'];
                $result[$i]['modelSubtitle'] = $data['modelSubtitle'];
                $result[$i]['modelDescription'] = $data['modelDescription'];
                $i++;
                ChromePhp::warn('modelDrinkDetails.php: Here is the test1.db data');
                ChromePhp::warn($result);
            }
        }
        catch(PDOException $e) {
            ChromePhp::warn('modelDrinkDetails.php: Code error on server?');
            print new Exception($e->getMessage());
        }
        $dbHandle = NULL;
        ChromePhp::warn('modelDrinkDetails.php: echo result to frontend in JSON packet');
        ChromePhp::warn($result);
        echo json_encode($result);
?>