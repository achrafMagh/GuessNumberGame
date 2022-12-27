import { View, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 70,
    marginHorizontal: 8,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
  },
});

export default Card;
