import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../../themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import relax2 from "../../assets/images/relax2.png"
import google from "../../assets/images/google.png"
import apple from "../../assets/images/apple.png"
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

type Props = {}

const SignUpScreen = (props: Props) => {

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
          <Image source={relax2} style={{width:200, height:200}} />
        </View>
      </SafeAreaView>
      <View className=" flex-1 bg-white px-8 pt-8 pb-8" style={{borderTopLeftRadius:50, borderTopRightRadius:50}}>
          <GestureHandlerRootView>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View className="form space-y-2">
                <Text className="text-gray-700 ml-4">Full Name</Text>
                <TextInput
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    value="John Snow"
                    placeholder='Enter Name'
                />
                <Text className="text-gray-700 ml-4">Email Address</Text>
                <TextInput
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    value="john@gmail.com"
                    placeholder='Enter Email'
                />
                <Text className="text-gray-700 ml-4">Password</Text>
                <TextInput
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                    secureTextEntry
                    value="test12345"
                    placeholder='Enter Password'
                />
                <TouchableOpacity
                    className="py-3 bg-yellow-400 rounded-xl"
                >
                    <Text className="font-xl font-bold text-center text-gray-700">
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

            <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
            <View className="flex-row justify-center space-x-12">
              <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={google} className="w-10 h-10" />
              </TouchableOpacity>
              <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={apple} className="w-10 h-10" />
              </TouchableOpacity>
              {/* <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
              </TouchableOpacity> */}
            </View>
            <View className="flex-row justify-center mt-7">
                <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text className="font-semibold text-yellow-500"> Login</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
          </GestureHandlerRootView>
      </View>
    </View>
  )
}

export default SignUpScreen
