#!/bin/bash
mkdir my_folder && cd $_
echo 'puts "this is file one"'>>one.rb
echo 'puts "this is file two"'>>two.rb
ruby one.rb
ruby two.rb 
cd ..
rm -r my_folder
