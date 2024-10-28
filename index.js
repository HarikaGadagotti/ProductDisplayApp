import { AppRegistry } from 'react-native';
import App from './src/App'; // Import the main App component from the src folder
import { name as appName } from './app.json'; // Import app name from app.json

AppRegistry.registerComponent(appName, () => App); // Register the App component
