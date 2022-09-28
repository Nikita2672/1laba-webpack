<?php

class Checker
{
    public static function checkHit($x, $y, $r): bool
    {
        $isHit = false;
        if ($x >= 0 && $y >= 0) {
            if ($y <= (-2 * $x + $r)) $isHit = true;
        } else if ($x < 0 && $y > 0) {
            if (!(($x * $x + $y * $y) > ($r * $r / 4))) $isHit = true;
        } else if ($x < 0 && $y <= 0) {
            if ($x > -$r && $y > -$r / 2) $isHit = true;
        }
        return $isHit;
    }
}