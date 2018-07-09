import React from 'react';
import ReactDOM from 'react-dom';

import Variables from './variables';
import Buttons from './buttons';

import './demo.scss';

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <Variables />
        <Buttons />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
