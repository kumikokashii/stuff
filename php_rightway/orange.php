<?php

header('Content-type: text/plain');

// php is loose on error handling, and tries to keep on processing unless errors are fatal
// @ ignores warnings for the following expression
// They won't be shown, but saved

echo "----------------------------\n";
echo "This is without @\n";
echo 2/0 . "\n";
echo "----------------------------\n";
echo "This is with @, and print error_get_last()\n";
echo @(2/0) . "\n";
print_r(error_get_last());
echo "\n";


// Input validation: https://secure.php.net/filter.filters.validate
$c = '(bogus@example.org)';
$sanitized_c = filter_var($c, FILTER_SANITIZE_EMAIL);

if (filter_var($sanitized_c, FILTER_VALIDATE_EMAIL)) {
    echo "This (c) sanitized email address is considered valid.\n";
    echo "Before: $c\n";
    echo "After:  $sanitized_c\n";    
}


// include: runs the file. Prob. not an ideal thing to do in most cases.
echo "----------------------------\n";
include 'kiwi.php';
echo "----------------------------\n";


?>
