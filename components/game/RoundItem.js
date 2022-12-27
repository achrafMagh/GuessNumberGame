import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors';

const RoundItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent:'space-between',
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        width: '100%',
        elevation: 4
    },
    itemText: {
        fontFamily:'open-sans'
    }
});

export default RoundItem