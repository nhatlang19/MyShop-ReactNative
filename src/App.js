import React, { Component } from 'react';
import { } from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import Authentication from './components/Authentication';
import Main from './components/Main';
import ChangeInfo from './components/ChangeInfo';
import OrderHistory from './components/OrderHistory';

class App extends Component {
    renderScene(route, navigator) {
        switch (route.name) {
            case 'MAIN': return <Main navigator={navigator} />;
            case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
            case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} />;
            default:
                return <OrderHistory navigator={navigator} />;
        }
    }

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'MAIN' }}
                renderScene={this.renderScene}
            />
        );
    }
}

export default App;
