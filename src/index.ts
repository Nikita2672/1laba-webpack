import './css/form.css'
import './css/graph.css'
import './css/header.css'
import './css/table.css'
import './css/main.css'
import 'jquery'
import 'popper.js'
import {constants} from "./Constants";
import {processFieldSelection} from "./processFieldSelection";
import {cleanInput} from "./cleaner";
import {Globals} from "./Globals";
import {receiveSubmit, success} from "./update";

const dt = require('datatables.net-dt')
$(document).ready(function (): void {

    initConstants();
    reloadTable();
    addListeners();
});

function reloadTable(): void {
    Globals.table = $('#table_id').DataTable({
        data: Globals.dataset,
        columns: [
            {title: 'X'},
            {title: 'Y'},
            {title: 'R'},
            {title: 'Time'},
            {title: 'Time completed'},
            {title: 'Result'},
        ]
    })

    $.ajax({
        type: "GET",
        url: "index.php",
        async: false,
        data: {"init": true},
        success: function (data) {
            success(data);
        }
    })
}


function initConstants(): void {
    constants.FIELD_Y = $('#y_value');
    constants.FIELD_X = $('#x_value');
    constants.FIELD_R = $('#r_value');
    constants.TABLE = $('#table_id');
}


function addListeners(): void {
    for (let i = -4; i < 5; i++) {
        $('#x' + i.toString()).on("click", () => {
            processFieldSelection(constants.FIELD_X, i.toString(), 'x');
        });
    }
    $('#reset').on('click', () => {
        cleanInput();
    });
    $('#submit').on("click", () => {
        console.log('23');
        receiveSubmit();
        return false;
    })
}
