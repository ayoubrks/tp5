import { View, Text, Button, StyleSheet, Alert } from "react-native"; 
import { useDispatch } from "react-redux"; 
import { removeTodo } from "../store/todosSlice"; 

export default function TodoDetailsScreen({ route, navigation }) { 
  const { id, title } = route.params; 
  const dispatch = useDispatch(); 

  const handleDelete = () => { 
    // ✅ Alert de confirmation
    Alert.alert(
      "Supprimer",
      "Voulez-vous vraiment supprimer cette tâche ?",
      [
        { text: "Annuler", style: "cancel" },
        { 
          text: "Supprimer", 
          style: "destructive",
          onPress: () => {
            dispatch(removeTodo(id)); 
            navigation.goBack(); 
          }
        }
      ]
    );
  }; 

  return ( 
    <View style={styles.container}> 
      {/* ✅ Texte DANS <Text> */}
      <Text style={styles.title}>{title}</Text> 
      <Text style={styles.id}>ID: {id}</Text> 

      <View style={styles.buttonContainer}>
        <Button 
          title="Supprimer cette tâche" 
          color="red" 
          onPress={handleDelete} 
        /> 
      </View>
    </View> 
  ); 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  id: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 20,
  },
});