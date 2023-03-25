import { v4 as uuidv4 } from 'uuid';

const defaultState = [
  {
    id: uuidv4(),
    title: 'Book an Appointment',
    description:
    `
    Book an Appointment is a project based on an app to book an appointment with a doctor.
    This is the front-end which was connected to a back-end repo.
    `,
    liveDemo: 'https://book-doctors-appointment.netlify.app/',
    sourceCode: 'https://github.com/Haywayaheadshot/book-an-appointment-front-end',
    stack: 'frontEnd, fullStack',
    builtWith: ['React', 'Redux'],
    mobileScreenShot: '../components/assets/doctors-appointment/Doctors-Appointment-front-end-mobile.png',
  },
//   {
//     id: uuidv4(),
//     title: 'Book an Appointment',
//     description:
//     `
//     Book an Appointment is a project based on an app to book an appointment with a doctor.
//     This is the back-end which was connected to a front-end repo.
//     `,
//     liveDemo: 'https://book-doctors-appointment.netlify.app/',
//     sourceCode: 'https://github.com/Haywayaheadshot/book-an-appointment',
//     stack: 'backEnd, fullStack',
//     builtWith: ['Ruby', 'Ruby on Rails'],
//   },
];

export default defaultState;
