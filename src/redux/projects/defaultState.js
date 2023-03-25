import { v4 as uuidv4 } from 'uuid';

const defaultState = [
  {
    id: uuidv4(),
    title: 'Book an Appointment Front-End',
    description:
    `
    Book an Appointment front-end is a project based on an app to book an appointment with a doctor.
    This is the front-end which was connected to a back-end repo.
    `,
    liveDemo: 'https://book-doctors-appointment.netlify.app/',
    sourceCode: 'https://github.com/Haywayaheadshot/book-an-appointment-front-end',
    stack: 'frontend, fullstack',
    builtWith: ['React', 'Redux'],
    mobileScreenShot: 'doctors-appointment/Doctors-Appointment-front-end-mobile.png',
    deskScreenShot: 'doctors-appointment/Doctors-Appointment-front-end-desk.png',
  },
  {
    id: uuidv4(),
    title: 'Book an Appointment Back-End',
    description:
    `
    Book an Appointment back-end is a project based on an app to book an appointment with a doctor.
    This is the back-end which was connected to a front-end repo.
    `,
    liveDemo: 'https://book-doctors-appointment.netlify.app/',
    sourceCode: 'https://github.com/Haywayaheadshot/book-an-appointment',
    stack: 'backend, fullstack',
    builtWith: ['Ruby', 'Ruby On Rails'],
    mobileScreenShot: 'doctors-appointment/Doctors-Appointment-back-end-mobile.png',
    deskScreenShot: 'doctors-appointment/Doctors-Appointment-back-end-desk.png',
  },
  {
    id: uuidv4(),
    title: 'Budget App',
    description:
    `
    Budget-App is a full-stack web application developed using Ruby on Rails.
    It provides user authentication with login and logout functionality,
    allowing users to securely access their data.
    With Budget-App, users can add categories to organize their expenses and incomes,
    and then add transactions for each category to keep track of their spending.
    The application also features a modern and visually appealing design that enhances the user experience.
    `,
    liveDemo: 'https://www.youtube.com/watch?v=hr4TgtRkKzc&feature=youtu.be',
    sourceCode: 'https://github.com/Haywayaheadshot/budget-app',
    stack: 'fullstack',
    builtWith: ['Ruby', 'Ruby On Rails'],
    mobileScreenShot: '',
    deskScreenShot: '',
  },
  {
    id: uuidv4(),
    title: 'Notifications Main Page',
    description:
    `
    This is a solution to the Notifications page challenge on Frontend Mentor.
    Frontend Mentor challenges help you improve your coding skills by building realistic projects
    `,
    liveDemo: 'https://haywayaheadshot.github.io/notifications-page-main/',
    sourceCode: 'https://github.com/Haywayaheadshot/notifications-page-main',
    stack: 'frontend',
    builtWith: ['Javascript'],
    mobileScreenShot: 'notifications-page/Notifications-page-mobile.png',
    deskScreenShot: 'notifications-page/Notifications-page-desk.png',
  },
  {
    id: uuidv4(),
    title: 'Rate your favourite movie',
    description:
    `
    This is collaborative project on a webpage that displays tv shows from a REST API.
    It allows a user to like and comment on their favourite shows. The number of comments,
    likes and the description in the comments which includes date and name are sent to APIs too.
    `,
    liveDemo: 'https://haywayaheadshot.github.io/javascript-capstone/',
    sourceCode: 'https://github.com/Haywayaheadshot/javascript-capstone',
    stack: 'frontend',
    builtWith: ['Javascript', 'Webpack'],
    mobileScreenShot: 'check-movie/Check-movie-ratings-mobile.png',
    deskScreenShot: 'check-movie/Check-movie-ratings-desk.png',
  },
  {
    id: uuidv4(),
    title: 'Multi-Step Form',
    description:
    `
    Multi-step form is form that allows users should be able to 
    Complete each step of the sequence,
    See a summary of their selections on the final step and confirm their order,
    View the optimal layout for the interface depending on their device's screen size,
    See hover and focus states for all interactive elements on the page.
    `,
    liveDemo: 'https://haywaya-multi-step-form.netlify.app/',
    sourceCode: 'https://github.com/Haywayaheadshot/multi-step-form-main',
    stack: 'frontend',
    builtWith: ['React', 'Redux'],
    mobileScreenShot: 'multi-step-form/Multi-step-form-mobile.png',
    deskScreenShot: 'multi-step-form/ Multi-step-form-desk.png',
  },
  {
    id: uuidv4(),
    title: 'Fetch countries from rest api',
    description:
    `
    This app allows users should be able to 
    See all countries from the API on the homepage,
    Search for a country using an input field,
    Filter countries by region,
    Click on a country to see more detailed information on a separate page,
    Click through to the border countries on the detail page, and
    Toggle the color scheme between light and dark mode.
    `,
    liveDemo: 'https://waya-rest-countries-api.netlify.app/',
    sourceCode: 'https://github.com/Haywayaheadshot/rest-countries-api-with-color-theme-switcher',
    stack: 'frontend',
    builtWith: ['React', 'Redux'],
    mobileScreenShot: 'countries/Countries-Info-mobile.png',
    deskScreenShot: 'countries/Countries-Info-desk-2.png',
  },
  {
    id: uuidv4(),
    title: 'Recipe App',
    description:
    `
    The Recipe app is an app I worked on with two other partners. It keeps track of all your recipes, ingredients,
    and inventory.
    It will allow you to save ingredients,
    keep track of what you have, create recipes,
    and generate a shopping list based on what you have and what you are missing from a recipe.
    Also, since sharing recipes is an important part of cooking
    the app should allow you to make them public so anyone can access them.
    `,
    liveDemo: 'https://github.com/Haywayaheadshot/Recipe-app',
    sourceCode: 'https://github.com/Haywayaheadshot/Recipe-app',
    stack: 'fullstack',
    builtWith: ['Ruby', 'Ruby On Rails'],
    mobileScreenShot: '',
    deskScreenShot: '',
  },
  {
    id: uuidv4(),
    title: 'Catalog',
    description:
    `
    Catalog is a project that I built with two other software developers where you can add,
    and consult for different types of things like:
    books, music albums, movies, and games
    `,
    liveDemo: 'https://drive.google.com/file/d/12NXPuV4G5YmCBKunUCU91HDlEXYAsty6/view',
    sourceCode: 'https://github.com/Haywayaheadshot/catalog-of-my-things',
    stack: 'backend',
    builtWith: ['Ruby'],
    mobileScreenShot: 'catalog/catalog_of_my_things.png',
    deskScreenShot: 'catalog/catalog_of_my_things.png',
  },
  {
    id: uuidv4(),
    title: 'School Library',
    description:
    `
    This app allows you to interact with some classes and their linked
    features in order to see how a school library works.
    `,
    liveDemo: 'https://github.com/Haywayaheadshot/school-library',
    sourceCode: 'https://github.com/Haywayaheadshot/school-library',
    stack: 'backend',
    builtWith: ['Ruby'],
    mobileScreenShot: '',
    deskScreenShot: '',
  },
];

export default defaultState;
