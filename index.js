import { AppRegistry } from 'react-native';
import Reactotron from 'reactotron-react-native';

import { name as appName } from './app.json';
import { App } from './App';

Reactotron.configure().useReactNative().connect();
AppRegistry.registerComponent(appName, () => App);
