import React from 'react';

import {View,Text} from 'react-native';

import {DrawerNavigator}  from 'react-navigation';

import Search from './pages/search';

const App= DrawerNavigator({

      Search: {screen: Search},
});

export default App;
