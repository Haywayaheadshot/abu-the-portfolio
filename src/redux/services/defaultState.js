import { v4 as uuidv4 } from 'uuid';

const defaultState = [
  {
    id: uuidv4(),
    name: 'Front-End Development',
    icon: 'FaReact',
    offers: [
      `
      Develop interactive and responsive user interfaces using JavaScript (ES6),
      React, Redux, Bootstrap, Tailwind, and SASS.
      `,
      `
      Utilize Figma for wireframing and prototyping UI designs.
      `,
      `
      Ensure web accessibility and SEO optimization of web applications.
      `,
      `
      Conduct cross-browser testing and debugging using Chrome DevTools.
      `,
      `
      Implement performance optimization techniques to improve website speed.
      `,
      `
      Deploy web applications to cloud platforms such as Netlify.
      `,
    ],
  },
  {
    id: uuidv4(),
    name: 'Back-End Development',
    icon: 'SiRubyonrails',
    offers: [
      `
      Develop and manage databases using SQL and Postgresql.
      `,
      `
      Create and deploy RESTful APIs using Ruby on Rails.
      `,
      `
      Utilize RSpec for automated testing of backend functionality
      `,
      `
      Utilize Git and GitHub for version control and collaboration.
      `,
      `
      Implement performance optimization techniques to improve API speed.
      `,
      `
      Conduct debugging and troubleshooting of backend issues.
      `,
    ],
  },
  {
    id: uuidv4(),
    name: 'Project Manager',
    icon: 'SiGithub',
    offers: [
      `
      Manage software development projects to ensure timely and high-quality delivery.
      `,
      `
      Conduct project planning, execution, and monitoring using agile methodologies.
      `,
      `
      Provide mentorship and guidance to junior developers to improve their skills.
      `,
      `
      Conduct remote pair-programming to help junior developers solve complex problems.
      `,
      `
      Utilize effective communication and collaboration tools such as Slack and Trello to facilitate teamwork.
      `,
      `
      Conduct code reviews and provide feedback to improve code quality.
      `,
    ],
  },
];

export default defaultState;
