import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {}

const HomeScreen = (props: Props) => {

  const handelLogout = async ()=> {
    await signOut(auth);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center flex-row">
      <Text className="text-lg">HomeScreen-</Text>
      <TouchableOpacity onPress={handelLogout} className=" p-1 bg-red-600 rounded-lg"><Text className=" text-lg font-bold text-white"> Logout</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen
