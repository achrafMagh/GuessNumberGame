import { Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 42
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.accent500,
      textAlign: 'center',
      borderWidth: 2,
      borderColor:Colors.accent500,
      padding: 12
    }
  })

export default Title