import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('<Registration/>', () => {
  it('renders registration', () => {
    render(<Registration />);
  });
})
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


