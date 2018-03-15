# Journey Planner

## Introduction
> This application is to make a own journey and share/interact the journey plans that other people posted.
> I'm using ReactJS with Redux and Webpack for the Front-end, and ASP.NET WebAPI is to use for the Back-end side.

## Main Includes
* React 16.2.0
* React-Redux 5.0.6
* React-router-dom 16.2.0
* Webpack 3.10.0
* Axios 0.17.1 : To get data by Json through the API calls
* Semantic UI : For design
* Azure : Published web application for Back-end

## Notice (15.Mar.2018)
> Able to access the site clicking on the below URL. Sign-up first and Try to Sign-in.
> https://react-jb-journey-planner.herokuapp.com/

## Release Note
* 15.Mar.2018: Production version setting and local environment edit
* 25.Feb.2018: Finish Heroku Server setting, Add login server error alert
* 24.Feb.2018: Add Sign-in Page, Add Login/Sign-in form validation
* 23.Feb.2018: Initially add Shared Journey Page (Need more update)
* 17.Feb.2018: Journey List/Form Styling - initial version is finished
* 13.Feb.2018: Login page Design (Add Background Image and apply scss)
* 13.Feb.2018: Finish CRUD functions in the journey page

## Next Steps (Continue updating)
Initial design of the webpage **(17.Feb DONE)**

**Shared Journey Page**
 - [x] Add Shared Journey Page - Create API(all users agreed sharing), Front Makeup **(23.Feb DONE)**
 - [ ] Make a like button on the Shared Journey page (only can click once)
 - [ ] Prevent to edit the journey created by others (only view page) (New on 15.Mar)

**My Journey Page**
 - [ ] Add Country/Region(city) information
 - [ ] Google Map is shown to indicate my journey visually (New on 26.Feb)

**Contact page**
 - [x] Add simple information

**Login Page**
 - [x] Add Sign in Page **(24.Feb DONE)**
 - [x] Add Login, Sign-in Validation **(24.Feb DONE)**
 - [ ] Use localstorage to keep the session in Redux (New on 26.Feb)

**Server Side**
 - [x] Heroku hosting setting - seperate dev and production **(25.Feb DONE)**
 - [X] API Server and database Setting on AWS Cloud (New on 25.Feb) **(15.Mar DONE)**
 - [ ] Login Session security, add api_key into the header when the account was created (New on 26.Feb)

## Documentation
* Trouble Shooting: https://docs.google.com/spreadsheets/d/1bmmZ90_t0lqlEYLGjGAHDeEjGcdYKsBZp8VFn8qDeGI/edit?usp=sharing
* API Definition: Soon
* React, Redux Structures: Soon