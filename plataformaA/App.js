import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/login"
import Perfil from "./screens/perfil";
import Horas from "./screens/horas"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="perfil">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false  }}
        />
        <Stack.Screen
          name="perfil"
          component={Perfil}
          options={{ headerShown: false  }}
        />
        <Stack.Screen
          name="Horas Complementares"
          component={Horas}
          options={
            { 
              animation: "slide_from_right",
              headerShown: true, 
              headerStyle:
              {
                backgroundColor:"#c8003c"
              },
              headerTintColor: "#fff"
            }
          }
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}