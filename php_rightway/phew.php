<?php

header('Content-type: text/plain');


$raw = '17. 9. 2019';
$start = DateTime::createFromFormat('d. m. Y', $raw);  // No need to import the class DateTime?
echo 'Start date: ' . $start->format('Y-m-d') . "\n";


// DateInterval class
// https://www.php.net/manual/en/class.dateinterval.php
$end = clone $start;
$end->add(new DateInterval('P1M6DT3S'));
echo 'End date: ' . $end->format('Y-m-d') . "\n";

$diff = $start->diff($end);
echo 'Difference: ' . $diff->format('%m month, %d days, %s seconds (total: %a days)') . "\n";


//foreach. array. as. temp var. key=>value.
$colors = array(1, 2, 3, 5);
foreach ($colors as $c) {
  echo $c . "\n";
}

foreach ($colors as $i=>$c) {
  echo "Index is $i. Value is $c.\n";
}

?>
