
import { View, Text ,Dimensions,AppState,Platform,Permission,PermissionsAndroid} from 'react-native'
import React,{useEffect, useState,useRef} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

import { FirebaseMessagingTypes ,firebase} from '@react-native-firebase/messaging';
import LoginNavigator from './Telemed/navigations/LoginNavigator';
import Loader from './Telemed/navigations/Loader';
import PushNotificationIOS from '@react-native-community/push-notification-ios'; 

import {SafeAreaProvider} from 'react-native-safe-area-context';

import PushNotification from 'react-native-push-notification'; 
import { LogBox } from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LocalNotificationBuilder from './Telemed/screens/LocalNotificationBuilder';
import messaging from "@react-native-firebase/messaging";
import DeviceInfo from 'react-native-device-info';




// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();



   const App = ({navigation}) => {
  
   

   

  
    
    // Call the function to request permission
    //requestPushNotificationPermission();

  
    const requestPermission=async()=> {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATION // or POST_NOTIFICATIONS
      
          )
        
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('granded')
            
          } else {
            console.log('not granded')
          }
        } catch (err) {
         
        }
    
    
    // where you need to get permission
   
  }
  const req=async()=>{
  if (Platform.OS == 'android' && DeviceInfo.getApiLevelSync() >= 33) {
    await requestPermission();
 }
}

 useEffect(()=>{
  req()
 
},[])



  
  
  

 
 
  useEffect(() => { 
    firebase.messaging().onMessage(response => { 
       //console.log(JSON.stringify(response));
       if (Platform.OS !='ios') { 
      //  PushNotification.requestPermissions();
           showNotification(response.notification); 
          // console.log('notification android',response)

           return; 
           
       } 
       PushNotificationIOS.requestPermissions().then(() => 
           showNotification(response.notification), 
          
       ); 
   }); 
 }, 
 []
 ); 
 

 

 PushNotification.createChannel(
  {
    channelId: "channel-id-1", // (required)
    channelName: 'My channel',
    playSound: true, // (optional) default: true
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);
PushNotification.createChannel(
  {
    channelId: "channel-id-2", 
    channelName: 'My channel2',
    playSound: true, 
    soundName: "default", 
    vibrate: true, 
    
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);
 const showNotification =  (notification) => { 
 
 // LocalNotificationBuilder.builder()
  
   
    // .setTitle(notification.title) 
    // .setMessage(notification.body)
    // .now()

   PushNotification.localNotification({ channelId:'channel-id-1',title: notification.title, message: notification.body + ' CST'}); 
  
  
  }; 
 
 


  return (
    <>
   <SafeAreaProvider>
   <GestureHandlerRootView style={{flex:1}}>
        <NavigationContainer>
    
       <LoginNavigator/>
 
      </NavigationContainer>
      </GestureHandlerRootView>
      </SafeAreaProvider>
  
      </>
  )
 
}

export default App;




