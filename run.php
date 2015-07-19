<?php
    echo shell_exec('if ls rplot.jpg 1 > /dev/null 2>&1; then rm rplot.jpg fi; cp uploads/*.csv uploads/1.csv; ls -d -1 uploads/*.* | grep -v \'1.csv\' | xargs rm; Rscript test.R; rm -rfv uploads/*');
?>