About the Project:

Developers: Cece Chen (Github: lilixiaoxx), Christopher Osbourne (Github: caosbourne), Alfredo Amengual (Github: aamengual14)

With CodeConnect.us is a web application with aimed goal of connecting developers/programers
with students interested in learning how to code, no matter the age or skill level. Upon sign-up,
developers can declare their interest in tutoring and essentially volunteer their time to students interested - we are a middle-man to arrange the meetups. 

The benefit to the devleopers is that they can volunteer their time to give bask to the community. Additionally, since this project has been created by coding bootcampers, we believe that teaching also can benefit the developers as well by reinforcing concepts and honing their own skills. We see this as a great tool for early-stage developers since most students will be beginners themselves. 


Technologies Used:


CodeConnect.us is built using most of the general MEAN stack software bundle - MongoDB, Express, Node.js. Note that Angular.Js has not been used*****. 

Front-end design was built using CSS, jQuery, and Bootstrap.

If you are interested in viewing the NPM modules that were used to help build the project, please view the package.json file.


Approach Taken: 


We developed the CodeConnect.us prototype we app in 4 days (this was our project time limit).

    Day 1: Project Planning (Idea Discussion, Goals, ERDs, Wireframes, and project setup)
           This day was reserved for strictly planning and no code. We wanted to make sure to have a clear path in mind before jumping into development. 

    Day 2: Development of website structure, bare bones look, database connection, and general sign-in/log-in capabilities.

    Days 3: Development of features.

    Day 4: Final styling, debugging, and deployment.



Installation Instructions:

    1. Fork or Clone Project on your Github/local computer.

    2. Git clone on your local computer terminal (make sure to to this in appropriate file location of your choice.)


    3. Run NPM install in terminal, same locaiton as above.

    4. Create a new database on MongoLab, only incorporating the recommendation.js model file and user.js model file. 

    5. In your bash profile, include: 

        export PROJECT2_DATABASE="mongodb://<YOUR USER NAME>.mlab.com:<YOUR PASSWORD>/project2_database"

    6. Make sure this is connected in your app.js file:

        mongoose.connect(process.env.PROJECT2_DATABASE);

    7. Run Nodemon on a separate tab in your profile. 

    8. Code away!



Unsolved Problems:

    Due to time constraints, it was difficult to include all the features and functionalities originally intended (session booking, further profile customization, user interaction.)

    Login and signin popups appear further down on the landing page than we would like. We theorize this is due to jQuery conflicts that we did not have time to debug completely. 

    Liking and disliking is limited to one per page as intended, but users cannot UNDUE this action.

![alt text](/public/Development_images/Erd.jpg "Description goes here")



