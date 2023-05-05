import { AppRegistry } from 'react-native';
import Reactotron from 'reactotron-react-native';

import App from './App';
import { name as appName } from './app.json';

Reactotron.configure().useReactNative().connect();
AppRegistry.registerComponent(appName, () => App);
