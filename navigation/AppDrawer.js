import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native"; // ✅ Import nécessaire
import TodoListScreen from "../screens/TodoListScreen";
import TodoDetailsScreen from "../screens/TodoDetailsScreen";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="TodoList">
      {/* ✅ PAS de texte hors composant */}
      <Drawer.Screen 
        name="TodoList" 
        component={TodoListScreen}
        options={{ 
          title: "Mes tâches",
          drawerLabel: "Liste des tâches" // ✅ Props, pas du JSX
        }}
      />
      {/* ✅ Cache l'écran Détails du drawer */}
      <Drawer.Screen 
        name="Détails" 
        component={TodoDetailsScreen}
        options={{ 
          drawerItemStyle: { display: 'none' }
        }}
      />
    </Drawer.Navigator>
  );
}