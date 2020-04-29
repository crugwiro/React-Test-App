import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import SearchScreen from "./src/Screens/SearchScreen";
import ResultsShowScreen from "./src/Screens/ResultsShowScreen";

const navigator = createStackNavigator({
Search: SearchScreen,
  Results: ResultsShowScreen
}, {
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);