# OOP Challenge: Team Profile Generator

## Link

https://drive.google.com/file/d/1l1xIeEsJvLpnWYvqGxA7xMza6YuagLu2/view

## Description
The purpose of this project is to generate a teams HTML page using node.js and object oriented programming.  The program will start by taking the team managers name, followed by some preliminary information about them.  It will then ask the user if they would like to add an engineer, intern, or finish program.  If they choose to add an engineer or intern, then they will have to enter more preliminary information about that team member.  Once that is entered, they will be once again prompted to add another team member or finish.  If finish is selected at any stage, the program will generate an HTML page that displays each team member and information about them.

Classes will be utilized to represent each type of team member (manager, engineer, and intern).  Tests will be run on each class to verify their functions are working as expected.  Jest will be utilized to run this testing.

## Steps Taken
1.  Created project folder and all required files.  Linked to github repository

2.  Created an HTML framework and associated style sheet

3.  Imported and installed libraries for JEST, Inquirer, and FS in index.js

4.  Created a list of question variables.  Created a html skeleton variable using a template literal, with assoicated html element variable to represent team member cards

5.  Created an function to append html team member cards to base html skeleton

6.  Created another function similar to step 5.  This one will add the employee specific 'trait' (manager = office number, engineer = github link, intern = school)

7.  Created a manager function, utilizing inquirer prompts to collect required data from user.  Saved data in temp variables as classes were not set up.

8.  Repeated step 7 for engineern and intern functions

9.  Added one more function to cycle adding another employee or finish building.  Added it at the end of functions to act as a loop.

10.  Created main class for employee, with respective manager, engineer, and intern sub classes.  Linked classes to index.js and swapped out temp variables.

11.  Created a test file for each class, linked together.  Completed testing on each class / subclass functions

   

