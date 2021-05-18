<?php
class Controller {
    public $load;
    public $model;

    function __construct($pageURI = null) {
        $this->load = new Load();
        $this->model = new Model();
        $this->$pageURI();
    }

    function home() {
        $data = $this->model->model3D_info();
        $this->load->view('view3DAppTest', $data);
    }
    function dbCreateTable() {
        echo "Create table function";
    }
    function dbInsertData() {
        echo "Data insertion function";
    }
    function dbGetData() {
        echo "Data retrieval function";
    }
}
?>