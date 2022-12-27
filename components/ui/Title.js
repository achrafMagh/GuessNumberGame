import { Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
      marginTop:30,
      fontFamily: 'open-sans-bold',
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
      borderWidth: 2,
      borderColor:'white',
      padding: 12
    }
  })

export default Title