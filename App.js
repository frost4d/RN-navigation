// import React from 'react';
// import Providers from './navigation';

// const App = () => {
//   return <Providers />;
// }

// export default App;

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseListScreen from "./screens/CourseListScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons"
import AppStack from "./navigation/AppStack";
import Feeds from "./screens/Feeds";

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={{
                    tabBarLabelPosition: "below-icon",
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: "purple",
                }}
            >
                <Tab.Screen name="Dashboard" component={Feeds }
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name= "home" size={20} color={color} />
                        )
                    }}
                />
                <Tab.Screen name="Market" component={AppStack} 
                    options={{
                        headerShown: false,
                        tabBarLabel: "Market",
                        tabBarIcon: ({ color }) => (<Ionicons name= "people" size={20} color={color} />
                        ),
                        tabBarBadge: 3,
                    }}
                />
                <Tab.Screen name="Breed" component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name= "people" size={20} color={color} />
                        )
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        // headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons name= "person" size={20} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}