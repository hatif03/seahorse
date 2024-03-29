import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { themeColors } from '../../themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import relax from "../../assets/images/relax.png"
import google from "../../assets/images/google.png"
import apple from "../../assets/images/apple.png"
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';



type Props = {}

const LoginScreen = (props: Props) => {

  const navigation= useNavigation();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null);

  const handleSubmit = async ()=> {
    if(email && password){
      try{
        await signInWithEmailAndPassword(auth, email, password);
      } catch(err){
        console.log("err caught: ", err);
      }
    }
  };

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
      <View className=" flex-1 bg-white px-8 pt-8 pb-8" style={{borderTopLeftRadius:50, borderTopRightRadius:50}}>
          <GestureHandlerRootView>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              value={email}
              onChangeText={value=>setEmail(value)}
              placeholder="email"
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password" 
              value={password}
              onChangeText={value=>setPassword(value)}
            />
            <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="py-3 bg-yellow-400 rounded-xl"
              onPress={handleSubmit}
              >
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Login
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
                <Text className="text-gray-500 font-semibold">
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
                    <Text className="font-semibold text-yellow-500"> Sign Up</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
          </GestureHandlerRootView>
      </View>
    </View>
  )
}

export default LoginScreen