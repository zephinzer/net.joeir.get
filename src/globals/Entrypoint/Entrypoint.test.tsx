import React from 'react';
import ReactDOM from 'react-dom';
import Entrypoint from './Entrypoint';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Entrypoint />, div);
  ReactDOM.unmountComponentAtNode(div);
});
