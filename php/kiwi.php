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


// strlen returns # of byte, not char
// range, INCLUDES end value!!! start and end are required
$hmm = '12345';
echo strlen($hmm) . "\n";

foreach(range(0, strlen($hmm)-1) as $i) {
  echo $hmm[$i] . "---";
}
echo "\n";

echo substr('opqrstu', 1, 3);  // 3 chars from position 1 of that str


// POD is like sqlalchemy. Can connect to diff. databases in same way
// POD = PHP Data Objects


?>

