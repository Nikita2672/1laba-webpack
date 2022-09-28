import 'jquery';
import {constants} from "./Constants";

export function cleanInput(): void {
    console.log($(constants.FIELD_X).val());
    $("#x" + $(constants.FIELD_X).val()).removeClass('selected');
    $(constants.FIELD_X).val("");
    $(constants.FIELD_Y).removeClass('error');
    $(constants.FIELD_R).removeClass('error');
}
