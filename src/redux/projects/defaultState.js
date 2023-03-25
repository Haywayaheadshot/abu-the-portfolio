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
];

export default defaultState;
