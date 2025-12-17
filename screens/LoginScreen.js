import { View, Text, Button, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* ✅ Texte DANS <Text> */}
      <Text style={styles.title}>Connexion requise</Text>
      <Text style={styles.subtitle}>Veuillez vous connecter pour continuer</Text>
      
      <Button title="Se connecter" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
});