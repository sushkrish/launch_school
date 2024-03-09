mkdir my_folder
cd my_folder
touch one.js
touch two.js
echo 'console.log("this is file one");'>>one.js
echo 'console.log("this is file two");'>>two.js
node one.js
node two.js
cd ../
rm -r my_folder
