# Behavioral Data Tracker v.3 (MERN App Phase)
A Behavioral Tracking Application for whole-interval recording, designed for ease of use and to reduce redundant data entry in many classroom behavioral tracking systems. This application collects data and updates charts in real time to display behavioral trends to help professionals evaluate the effectiveness of behavioral interventions.  Although the app was specifically designed for use with students with severe emotional/behavioral disabilities requiring frequent behavioral monitoring, it can be used by teachers serving any population of students.  Please note that this is a prototype for further development incorporating fictitious data and utilizes minimal security measures to protect student data.  Please do NOT use this version to store any real student data.  The developers are not responsible for the misuse of this application.

## Developed by: Sarah Kinneer, Billy Sterling, and Jodi Woodard
## May 2019

### Login Page
![Photo of Login Page](Login.png)

### Welcome Page
![Photo of Welcome Page](welcome.png)

### Teacher Dashboard
![Photo of Teacher Dashboard](table.png)

### Progress Dashboard
![Photo of Student Charts](progress.png)

### Behavior Graph
![Photo of Student Charts](chart.png)

## Technologies Used:
HTML5, CSS3, React, Materialize, JavaScript, MongoDB, Mongoose, Express, Chart, Amplify Cognito, Moment

## Link to Live Site:
- [Log some (fictional) data!](https://behavioraldatatrackerv3.herokuapp.com/)

## To Use the Live Site:
- Sign in with your user id and password. You may view a demo site with our fictional teacher 'Becky Tanner' who has the username 'misstanner@fenceworkshop.com', and the extra-super-secure password 'Password1!'.
- Once logged in you will arrive at the welcome screen.  In the left side navigation there are options to 'Rate Your Students', 'View Progress', and 'Logout'.
- Since 'Becky Tanner' is a staff member, if you select 'Rate Your Students' you will see her dashboard page with several make-believe student goals ready for rating.
- Feel free to enter data by selecting radio buttons telling whether each student met their behavior goals during a rating interval and clicking the 'SAVE DATA' button.  This saves a rating instance to the database.  It is up to the team working with each student to determine rating intervals.  Not all students necessarily need to be rated at each interval (the app is designed to handle null/undefined inputs).
- Click on 'View Progress' in the left side navigation and you will be presented with the behavior performance graph of the first student being tracked, along with a clickable list of students and their behaviors that are being monitored.
- Click on a student name to view that student's behavioral progress over time. These charts show the average percentage of intervals the identified goal was met each day.

## Future Development:
- There are plans to develop this application further, including adding student/parent and admin interfaces as well as additional behavioral monitoring features (such as student self-monitoring, frequency counts, duration recording, random instance recording, etc.).  We also plan to strengthen security measures to ensure that student data is protected per FERPA and COPPA regulations.

## Sources:
Templates adapted from Materialize
