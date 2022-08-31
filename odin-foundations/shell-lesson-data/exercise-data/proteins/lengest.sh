#Print the longest file
wc -l $1/*.$2 | sort -n | tail -n 2 | head -n 1

