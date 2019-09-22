<?php

// https://phptherightway.com/pages/The-Basics.html

// https://stackoverflow.com/questions/12410695/new-line-n-in-php-is-not-working/12411073
header('Content-type: text/plain');

echo "hohoho ^_^\n";

$a = 3;
$yay = "koala";

var_dump($a);  // var_dump prints
var_dump($yay);

echo "-------------------------\n";
var_dump($yay, $a);
echo "-------------------------\n";

var_dump($a == 3);
var_dump($a == '3');  // becomes int on its own!
var_dump($a === '3');  // 3='s need dtype to be same


// strpos is like: a in b that return start position
echo strpos('cat', 'at');
echo "\n";
echo strpos('bye!', 'hi!');  // false is returned. nothing printed. true is printed as 1. ?!
echo "\n";
echo strpos('hmm', 'hm') === false;  // 0 is not strictly false
echo "\n";


// str concat: . is plus
// single quote for literal str
// double quote for variables (use {}), \n, etc.

$balloon = 'fire' . ', air';
echo $balloon . "\n";

$ocean = 'earth';
$ocean .= ', water';
echo $ocean . "\n";

echo '$ocean' . "\n";

echo $balloon . ', ' . $ocean . "\n";

echo "$ocean, $balloon\n...zzz...\n";

$green = 'tomato';
echo "$greenes\n";  // not as intended. prints nothing

echo "{$green}es\n";  // nice! like '{}'.format(a)

$colors = array('pink', 'grey');
echo "colors are: {$colors[0]}s and {$colors[1]}s!\n";

$blue = <<<EOD
first line
second line
v^_^v
last line
$ocean
EOD;

echo "-------------------------\n";
echo $blue . "\n";
echo "-------------------------\n";


// Ternary op
$a = 3;
echo ($a == 3) ? 'yup' : 'no';


// Shock: Variable declarations
// bottom of https://phptherightway.com/pages/The-Basics.html


?>
