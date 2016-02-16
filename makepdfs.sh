#!/bin/bash

# Convert SVG to PDF with Cairo
for icon in ./svg-min/*.svg
do
	echo "Processing: cairosvg $icon -d 72 -o ./pdf/${icon:10:100}.pdf"
	cairosvg $icon -d 72 -o ./pdf/${icon:10:100}.pdf

done

# Clean up PDF filenames
for f in ./pdf/*.svg.pdf
do
	echo "Renaming $f to ${f%.*.*}.pdf"
	mv "$f" "${f%.*.*}.pdf"

done