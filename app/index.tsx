import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Home() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Link href="/home">Home</Link>
    </View>
  )
}

