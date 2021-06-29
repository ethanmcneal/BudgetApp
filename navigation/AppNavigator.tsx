import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Home";
import MyComponents from "../screens/MyComponents";
import SquareCardInfo from "../components/myComponents/componentInfo/SquareCardInfo";
import CenterViewInfo from "../components/myComponents/componentInfo/CenterViewInfo";


const ComponentNavigator = createStackNavigator({
    MyComponents: MyComponents,
    SquareCard: SquareCardInfo,
    CenterView: CenterViewInfo
})

const HomeNavigator = createStackNavigator({
    Home: Home,
})

const MainNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Components: ComponentNavigator
})

export default createAppContainer(MainNavigator)