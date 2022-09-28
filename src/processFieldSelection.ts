export function processFieldSelection(field: object, value: string, fieldName: string): void {
    if ($(field).val() === value) {
        $(field).val("");
        $('#' + fieldName + value).removeClass('selected');
    } else {
        if ($(field).val() !== "") {
            $('#' + fieldName + $(field).val()).removeClass('selected');
        }
        $(field).val(value);
        $('#' + fieldName + value).addClass('selected');
    }
}
