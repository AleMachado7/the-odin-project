#Sort files by their lenght.
#Usage: bash sorted.sh one_or_more_filenames
wc -l "$@" | sort -n


