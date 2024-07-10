import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
function SignIn() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    setIsSubmitting(true);
  }
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='h-full w-full justify-center items-start px-4 my-6'>
          <Image className='w-[115px] h-[35px]' source={images.logo} resizeMode='contain'/>
          <Text className='text-2xl text-semibold mt-10 text-white font-psemibold'>Log in to Aora</Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })} 
            keyboardType='email-address'
            otherStyles='mt-7'
          />
           <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })} 
            otherStyles='mt-7'
          />
          <View className='w-full flex justify-end items-end mt-7'>
            <Text className='text-white font-pmedium font-[400]'>Forgot Password</Text>
          </View>
          <CustomButton title={"Log in"} handlePress={submit} containerStyles="w-full mt-7" isLoading={isSubmitting}/>
          <View className='w-full justify-center items-center pt-7 flex-row gap-2'>
            <Text className='text-gray-100 text-lg font-pregular font-bold'>Don't have an account?</Text>
            <Link href='/sign-up' className='text-secondary-200 text-lg font-psemibold'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn;