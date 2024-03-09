mkdir preparations_exercises
cd preparations_exercises
touch foo.js
echo 'let foo = "bar";' >> foo.js
echo 'console.log(foo);' >> foo.js
echo 'foo;'>> foo.js
node foo.js
cd ../
rm -r preparations_exercises
