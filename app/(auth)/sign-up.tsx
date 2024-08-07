import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { images } from '@/constants';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUser } from '@/lib/appWrite';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    user: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async() => {
    if(!form.email || !form.password || !form.user){
      Alert.alert('Error', 'Please fill in all the fields')
    }
    try{
      const result = await createUser(form)
      router.replace('/home')
    } catch(err: any) {
      Alert.alert('Error', err.message);   
    }finally{
      setIsSubmitting(false)
    }    // setIsSubmitting(true);
  }
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='h-full w-full justify-center items-start px-4 my-6'>
          <Image className='w-[115px] h-[35px]' source={images.logo} resizeMode='contain'/>
          <Text className='text-2xl text-semibold mt-10 text-white font-psemibold'>Sign Up</Text>
          <FormField
            title='Username'
            value={form.user}
            handleChangeText={(e: any) => setForm({ ...form, user: e })} 
            otherStyles='mt-10'
            placeholder='Your unique username'
          />
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
    
          <CustomButton title={"Sign Up"} handlePress={submit} containerStyles="w-full mt-7" isLoading={isSubmitting}/>
          <View className='w-full justify-center items-center pt-7 flex-row gap-2'>
            <Text className='text-gray-100 text-lg font-pregular font-bold'>Already have an account?</Text>
            <Link href='/sign-in' className='text-secondary-200 text-lg font-psemibold'>Login</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp