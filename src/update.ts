import {constants} from "./Constants";
import {validateInputedValues} from "./validator";
import {Globals} from "./Globals";

export function receiveSubmit() {
    console.log('1');
    const x = $(constants.FIELD_X).val();
    const y = $(constants.FIELD_Y).val();
    const r = $(constants.FIELD_R).val();
    console.log('2');
    if (validateInputedValues(x, y, r)) {
        console.log('3');
        sendRequest(x, y, r);
    }
}

function sendRequest(x: string | number | string[] | undefined,
                     y: string | number | string[] | undefined,
                     r: string | number | string[] | undefined) {
    $.ajax({
        type: "GET",
        url: "index.php",
        async: false,
        data: {"x": x, "y": y, "r": r},
        success: function (data) {
            success(data);
        },
    });
}

export function success(data: string) {
    // @ts-ignore
    Globals.table.destroy();
    initTable(data);
}

function initTable(data: string) {
    var mass: string[] = data.split("%");
    Globals.dataset = [];
    if (mass[0] !== '') {
        for (let i = 0; i < mass.length; i++) {
            Globals.dataset.push(mass[i].split("*"));
        }
    }
    Globals.table = $(constants.TABLE).DataTable({
        data: Globals.dataset,
        columns: [
            {title: 'X',},
            {title: 'Y',},
            {title: 'R',},
            {title: 'Time',},
            {title: 'Process Time',},
            {title: 'Result',},
        ],
    })

}
