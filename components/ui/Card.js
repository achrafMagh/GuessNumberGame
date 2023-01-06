import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 8,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
  },
});

export default Card;
