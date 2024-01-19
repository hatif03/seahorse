import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../../themes'
import welcome from '../../assets/images/welcome.png'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const WelcomeScreen = (props: Props) => {

  const navigation = useNavigation();

  return (
    <SafeAreaView className=" flex-1 pb-20" style={{backgroundColor:themeColors.bg}}>
      <View className=" flex-1 flex justify-around">
        <Text className=" text-white font-bold text-4xl text-center">Let's Get Started!</Text>
      </View>
      <View className=" flex-row justify-center mb-6">
        <Image source={welcome} style={{width:350, height:350}}/>
      </View>
      <View className=" space-y-4">
        <TouchableOpacity className=" bg-yellow-400 py-3 mx-7 rounded-2xl" onPress={()=> navigation.navigate("Signup")}>
          <Text className=" text-xl font-bold text-center text-gray-700">Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View className=" flex-row justify-center mt-3">
        <Text className=" text-white font-semibold">Already have an account? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
          <Text className=" font-semibold text-yellow-400">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen