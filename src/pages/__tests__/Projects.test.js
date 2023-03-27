import React from 'react';
import {
  render, waitFor, screen, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Portfolio from '../Projects';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('Portfolio', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      repos: [
        {
          id: '1',
          title: 'Project 1',
          mobileScreenShot: 'link/to/mobile/screenshot',
          description: 'Description of project 1',
          builtWith: ['React'],
          liveDemo: 'link/to/live/demo',
          sourceCode: 'link/to/source/code',
          deskScreenShot: 'link/to/desktop/screenshot',
          stack: ['Front-End', 'Back-End'],
        },
        {
          id: '2',
          title: 'Project 2',
          mobileScreenShot: 'link/to/mobile/screenshot',
          description: 'Description of project 2',
          builtWith: ['React'],
          liveDemo: 'link/to/live/demo',
          sourceCode: 'link/to/source/code',
          deskScreenShot: 'link/to/desktop/screenshot',
          stack: ['Full-Stack'],
        },
        {
          id: '3',
          title: 'Project 3',
          mobileScreenShot: 'link/to/mobile/screenshot',
          description: 'Description of project 3',
          builtWith: ['React'],
          liveDemo: 'link/to/live/demo',
          sourceCode: 'link/to/source/code',
          deskScreenShot: 'link/to/desktop/screenshot',
          stack: ['Front-End'],
        },
      ],
    });

    component = render(
      <Provider store={store}>
        <Portfolio />
      </Provider>,
    );
  });

  it('renders the component without crashing', async () => {
    await waitFor(() => {
      expect(component).toBeDefined();
    });
  });

  it('displays the correct header', async () => {
    await waitFor(() => {
      const header = screen.getByText('Welcome To The Projects Section.');
      expect(header).toBeInTheDocument();
    });
  });

  it('displays the correct sub-header', async () => {
    await waitFor(() => {
      const subHeader = screen.getByText(
        'Below are some of the projects I have worked on.'
      );
      expect(subHeader).toBeInTheDocument();
    });
  });

//   const testData = [
//     { value: 'All Projects', expectedLength: 3, expectedText: '' },
//     { value: 'Front-End', expectedLength: 2, expectedText: 'Front-End' },
//     { value: 'Back-End', expectedLength: 1, expectedText: 'Back-End' },
//     { value: 'Full-Stack', expectedLength: 1, expectedText: 'Full-Stack' },
//   ];

//   testData.forEach(({ value, expectedLength, expectedText }) => {
//     it(`renders projects correctly for "${value}" option`, async () => {
//       fireEvent.change(screen.getByTestId('select-projs'), {
//         target: { value },
//       });

//       await waitFor(() => {
//         const projects = screen.getAllByTestId('project');
//         expect(projects.length).toBe(expectedLength);
//         expect(
//           projects.every((project) => project.textContent.includes(expectedText)),
//         ).toBe(true);
//       });
//     });
//   });
});
