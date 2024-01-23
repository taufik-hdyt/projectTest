import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { Text } from "react-native-paper";

const Tab = createBottomTabNavigator();
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#3081D0",
          height: 40,
        },
        tabBarStyle: {
          backgroundColor: "#3081D0",
          elevation: 0,
          padding: 7,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "rgba(255,255,255, 0.6)",
        tabBarLabelStyle: {
          fontWeight: "600",
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={23} color={color} />
          ),
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                marginLeft: -10,
              }}
            >
              <MaterialCommunityIcons name="post" size={30} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                }}
              >
                Posts
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={23} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
