<?php
class Model {
    public function model3D_info() {
        return array(
            'model_1' => 'Coke Can 3D Image 1',
            'image3D_1' => 'coke1',

            'model_2' => 'Sprite 3D Image 1',
            'image3D_2' => 'sprite1',

            'model_3' => 'Dr Pepper 3D Image 1',
            'image3D_3' => 'pepper1',

            'model_4' => 'Coke Zero 3D Image 1',
            'image3D_4' => 'coke_bottle1',

            'model_5' => 'Fanta 3D Image 1',
            'image3D_5' => 'fanta1',

            'model_6' => 'Costa 3D Image 1',
            'image3D_6' => 'costa1',
        );
    }

    public $dbHandle;
    public function __construct() {
        $dsn = 'sqlite:./db/test1.db';
        try {
            $this->dbHandle = new PDO($dsn, 'user', 'password', array(
                                                                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                                                                PDO::ATTR_EMULATE_PREPARES => false,
            ));
        }
        catch(PDOException $e) {
            echo "Can't connect to database!";
            print new Exception($e->getMessage());
        }
    }

    public function dbCreateTable() {
        try {
            $this->dbHandle->exec("CREATE TABLE Model_3D (Id INTEGER PRIMARY KEY model3DTitle TEXT, creationMethod TEXT, modelTitle TEXT, modelSubtitle TEXT, modelDescription TEXT)");
            return "Model_3D table is successfully created inside test1.db file";
        }
        catch (PDOException $e) {
            print new Exception($e->getMessage());
        }
        $this->dbHandle = NULL;
    }

    public function dbInsertData() {
        try {
            $this->dbHandle->exec(
            "INSERT INTO Model_3D (Id, model3DTitle, creationMethod, modelTitle, modelSubtitle, modelDescription) VALUES (1, 'string_1', 'string_2', 'string_3', 'string_4', 'string_5');" .
            "INSERT INTO Model_3D (Id, model3DTitle, creationMethod, modelTitle, modelSubtitle, modelDescription) VALUES (2, 'string_1', 'string_2', 'string_3', 'string_4', 'string_5');" .
            "INSERT INTO Model_3D (Id, model3DTitle, creationMethod, modelTitle, modelSubtitle, modelDescription) VALUES (3, 'string_1', 'string_2', 'string_3', 'string_4', 'string_5');");
            return "3D model data inserted successfully inside test1.db";
        }
        catch (PDOException $e) {
            print new Exception($e->getMessage());
        }
        $this->dbHandle = NULL;
    }

    public function dbGetData() {
        try{
            $sql = 'SELECT * FROM Model_3D';
            $stmt = $this->dbHandle->query($sql);
            $result = null;
            $i=-0;
            while ($data = $stmt->fetch()) {
                $result[$i]['model3DTitle'] = $data['model3DTitle'];
                $result[$i]['creationMethod'] = $data['creationMethod'];
                $result[$i]['modelTitle'] = $data['modelTitle'];
                $result[$i]['modelSubtitle'] = $data['modelSubtitle'];
                $result[$i]['modelDescription'] = $data['modelDescription'];
                $i++;
            }
        }
        catch (PDOException $e) {
            print new Exception($e->getMessage());
        }
        $this->dbHandle = NULL;
        return $result;
    }

    public function dbGetBrand() {
        return array("-", "Coke", "Sprite", "Dr Pepper", "Coke Zero", "Fanta", "Costa Coffee");
    }
}
?>