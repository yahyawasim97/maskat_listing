import React, {Component} from 'react';
import { View,StatusBar, Text } from 'react-native';
import AppRoutes  from './config/routes';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import reducers from './reducers';
import GlobalFont from 'react-native-global-font';
import {COLOR_PRIMARY} from './Theme/Colors';
import ReduxThunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  
  componentWillMount() {
    let fontName = 'Montserrat-Regular';
    GlobalFont.applyGlobal(fontName)
 }
 componentDidMount(){
   SplashScreen.hide();
 }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={COLOR_PRIMARY}
          barStyle='light-content'
        />
      
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <AppRoutes/>
      </Provider>
      </View>
    );
  }
}
