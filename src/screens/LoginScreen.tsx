import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../../themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import relax from "../../assets/images/relax.png"

type Props = {}

const LoginScreen = (props: Props) => {

  const navigation= useNavigation()

  return (
    <View className=" flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className=" flex mt-2">
        <View className="flex-row justify-start">
          <TouchableOpacity className=" bg-yellow-400 p-2 ml-4 rounded-tr-2xl rounded-bl-2xl" onPress={()=> navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className=" flex-row justify-center">
          <Image source={relax} style={{width:200, height:200}}/>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen