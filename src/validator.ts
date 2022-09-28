import {constants} from "./Constants";

export function validateInputedValues(xVal: string | number | string[] | undefined,
                               yVal: string | number | string[] | undefined,
                               rVal: string | number | string[] | undefined)
    : boolean {
    let isY: boolean;
    let isR: boolean;
    let isX: boolean;

    if (!validateNumber(-3, 5, yVal)) {
        isY = false;
        console.log('y false')
        $(constants.FIELD_Y).addClass('error');
        console.log(constants.FIELD_Y);
        console.log($(constants.FIELD_Y).val());
    } else {
        isY = true
        $(constants.FIELD_Y).removeClass('error');
    }
    if (!validateNumber(2, 5, rVal)) {
        isR = false;
        $(constants.FIELD_R).addClass('error');
    } else {
        isR = true;
        $(constants.FIELD_R).removeClass('error');
    }
    if (!validateX(-4, 4, xVal)) {
        isX = false;
        $('#mistake').removeClass('mistake');
    } else {
        isX = true;
        $('#mistake').addClass('mistake');
    }
    return isX && isY && isR;
}

function validateNumber(left: number, right: number, InputElement: string | number | string[] | undefined): boolean {
    if (typeof InputElement === 'string' || typeof InputElement === 'number') {
        let number: number = parseFloat(InputElement.toString())
        return !(isNaN(number) || number <= left || number >= right);
    } else {
        return false;
    }
}

function validateX(left: number, right: number, xInputElement: string | number | string[] | undefined): boolean {
    if (typeof xInputElement === 'string' || typeof xInputElement === 'number') {
        xInputElement = xInputElement.toString();
        let x: number = parseInt(xInputElement);
        return !(isNaN(x) || x < left || x > right);
    } else {
        return false;
    }
}
