import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './js/App';

export default class MyShop extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('MyShop', () => MyShop);
