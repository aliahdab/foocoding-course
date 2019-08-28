
echo "Hello/Foocafe Team" //print to screen
cd ~
mkdir -p foocafe/homeworkweek03/step01
cd foocafe/homeworkweek03/step01
echo "You'll see the files in the following path" && pwd
sleep 6
touch blank
for i in {1..5}; do echo "hello" >> greetings.txt; done
for i in {1..5}; do cp greetings.txt $i.txt; done
echo "cat" > pets.txt
echo "dog" >> pets.txt
echo "hamster" >> pets.txt
echo "cat" > commands.txt
echo "ls" >> commands.txt
echo "pwd" >> commands.txt
sort pets.txt | uniq > pets.sorted
sort commands.txt | uniq >commands.sorted
comm pets.sorted commands.sorted > lovelycommands.txt
sort lovelycommands.txt >lovelycommands.sorted
cat lovelycommands.sorted
sleep 6
