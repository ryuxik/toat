import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './App';
import Client from "./Client";

jest.mock('../src/Client');

describe('App tests', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppRouter/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
