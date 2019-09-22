<?php

header('Content-type: text/plain');

// php is loose on error handling, and tries to keep on processing unless errors are hatal

// @ ignores errors for the following expression
// Error won't be shown, but saved

echo "----------------------------\n";
echo "This is without @\n";
echo 2/0 . "\n";
echo "----------------------------\n";
echo "This is with @, and print error_get_last()\n";
echo @(2/0) . "\n";
print_r(error_get_last());

?>
