<?php

class Validator
{
    private const Y_MIN = -3;
    private const Y_MAX = 5;
    private const R_MIN = 2;
    private const R_MAX = 5;
    private const X_MIN = -4;
    private const X_MAX = 4;

    public static function validate($x, $y, $r): bool
    {
        $c = get_called_class();
        if (!(is_numeric($x) && is_numeric($y) && is_numeric($r))) {
            return false;
        } else {
            $y_num = floatval($y);
            $r_num = floatval($r);
            $x_num = intval($x);

            if (!($x_num >= $c::X_MIN && $x_num <= $c::X_MAX)) {
                return false;
            }

            if (!($y_num >= $c::Y_MIN && $y_num <= $c::Y_MAX)) {
                return false;
            }
            if (!($r_num >= $c::R_MIN && $r_num <= $c::R_MAX)) {
                return false;
            }
            return true;
        }
    }
}