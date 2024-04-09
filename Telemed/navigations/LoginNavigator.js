import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Loader from './Loader';
import NoteProvider from '../screens/NoteProvider';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';

// const Drawer = createDrawerNavigator();
// function DrawerNavigator({route, navigation}) {
//   console.log('params', route.params);
//   const {ID, Scribe} = route.params;
//   return (
//     <NoteProvider>
//       <Drawer.Navigator
//         drawerContent={props => <CustomDrawer {...props} />}
//         screenOptions={{headerShown: false}}>
//         {Scribe === 'Provider' || Scribe === 'Hospitalist' ? (
//           <Drawer.Screen
//             name="Appointment"
//             initialParams={{ID, Scribe}}
//             options={{
//               drawerIcon: () => (
//                 <IonIcons name="home-outline" color={'#e6c402'} size={22} />
//               ),

//               //,drawerLabel :()=>null, drawerItemStyle: { display: 'none' }
//               drawerLabelStyle: {
//                 marginLeft: -20,
//                 fontFamily: 'SpaceGrotesk-SemiBold',
//                 fontSize: 15,
//               },
//             }}
//             component={AppointmentDashboard}
//           />
//         ) : (
//           <Drawer.Screen
//             name="Appointment"
//             initialParams={{ID, Scribe}}
//             options={{
//               drawerIcon: () => (
//                 <IonIcons name="home-outline" color={'#e6c402'} size={22} />
//               ),

//               //,drawerLabel :()=>null, drawerItemStyle: { display: 'none' }
//               drawerLabelStyle: {
//                 marginLeft: -20,
//                 fontFamily: 'SpaceGrotesk-SemiBold',
//                 fontSize: 15,
//               },
//             }}
//             component={ScribeAppointmentDashboard}
//           />
//         )}
//         <Drawer.Screen
//           name="Profiles"
//           options={{
//             drawerIcon: () => (
//               <IonIcons name="person-outline" size={23} color={'#e6c402'} />
//             ),
//             drawerLabel: 'Profile',
//             drawerLabelStyle: {
//               fontFamily: 'SpaceGrotesk-SemiBold',
//               fontSize: 15,
//               color: '#333333',
//               marginLeft: -20,
//             },
//           }}
//           component={ProfileDashboard}
//         />
//       </Drawer.Navigator>
//     </NoteProvider>
//   );
// }

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <NoteProvider>
      <Stack.Navigator
        initialRouteName="Loader"
        screenOptions={{orientation: 'portrait'}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Loader"
          component={Loader}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false, animation: 'fade_from_bottom'}}
        /> */}
        {/* <Stack.Screen
          name="TermsandConditions"
          component={TermsandConditions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NoteProvider>
  );
};

// const ProfileDashboard = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Profile"
//       screenOptions={{orientation: 'portrait'}}>
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{headerShown: false, animation: 'slide_from_left'}}
//       />
//       <Stack.Screen
//         name="EditAddress"
//         component={EditAddress}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="WeekDayUpdate"
//         component={WeekDayUpdate}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="WeekDay"
//         component={WeekDay}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="AvailabilityUpdate"
//         component={AvailabilityUpdate}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Availability"
//         component={Availability}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="EditPersonalInfo"
//         component={EditPersonalInfo}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Contact"
//         component={Contact}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// const ScribeAppointmentDashboard = ({route, navigation}) => {
//   const {ID, Scribe} = route.params;
//   return (
//     <Stack.Navigator
//       initialRouteName="ScribeAppointments"
//       screenOptions={{orientation: 'portrait'}}>
//       <Stack.Screen
//         name="ProceedPropose"
//         component={ProceedPropose}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="SendMessage"
//         component={SendMessage}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="TransitionalList"
//         component={TransitionalList}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Demo"
//         component={Demo}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="PendingDetailView"
//         component={PendingDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProposedDetailView"
//         component={ProposedDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="PriorAuthProceed"
//         component={PriorAuthProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="DeclinedDetailView"
//         component={DeclinedDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="createdDeclinedList"
//         component={CreatedDeclinedList}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="createdFacilityDeclinedRef"
//         component={CreatedFacilityDeclinedRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="TcmDetailView"
//         component={TcmDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OpDetailView"
//         component={OpDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeAccepted"
//         component={ScribeAccepted}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribePending"
//         component={ScribePending}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeTcmAccepted"
//         component={ScribeTcmAccepted}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeNotification"
//         component={ScribeNotification}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="DeclinedList"
//         component={DeclinedList}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityDeclinedRef"
//         component={FacilityDeclinedRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeProposedData"
//         component={ScribeProposedData}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityProceed"
//         component={FacilityProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeDeclined"
//         component={ScribeDeclined}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeFacDeclined"
//         component={ScribeFacDeclined}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProviderNotification"
//         component={ProviderNotification}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="ScribeFacilityAccepted"
//         component={ScribeFacilityAccepted}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeFacilityPending"
//         component={ScribeFacilityPending}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeFacilityProposed"
//         component={ScribeFacilityProposed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeOpLocationType"
//         component={ScribeOpLocationType}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="ScribeOpAccepted"
//         component={ScribeOpAccepted}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeCreateAppointment"
//         component={ScribeCreateAppointment}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeLocationType"
//         component={ScribeLocationType}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityAcceptedRef"
//         component={FacilityAcceptedRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeAppointments"
//         component={ScribeAppointments}
//         initialParams={{ID, Scribe}}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeCreateAppointmentOS"
//         component={ScribeCreateAppointmentOS}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityPendingRef"
//         component={FacilityPendingRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Acceptedforcreated"
//         component={Acceptedforcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Pendingforcreated"
//         component={Pendingforcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Proposedforcreated"
//         component={Proposedforcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="PendingforFcreated"
//         component={PendingforFcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="AcceptedforFcreated"
//         component={AcceptedforFcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProposedforFcreated"
//         component={ProposedforFcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityProposeRef"
//         component={FacilityProposeRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OpPatientDetail"
//         component={OpPatientDetail}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="OpFacility"
//         component={OpFacility}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OutPatientReferralList"
//         component={OutpatientReferralList}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="Reschedule"
//         component={Reschedule}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="RescheduleProceed"
//         component={RescheduleProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="RescheduleProvider"
//         component={RescheduleProvider}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="OutPatientProceed"
//         component={OutPatientProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OpLocationType"
//         component={OpLocationType}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OutPatientProvider"
//         component={OutPatientProvider}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="Dischargedate"
//         component={Dischargedate}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="TcmPatientDetail"
//         component={TcmPatientDetail}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="DetailView"
//         component={DetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProposedData"
//         component={ProposedData}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProposeTime"
//         component={ProposeTime}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       {/* <Stack.Screen
//             name='Profile'
//             component={Profile}
//             options={{ headerShown: false,animation:'slide_from_left' }}
//         /> */}
//       <Stack.Screen
//         name="NotesUpdate"
//         component={NotesUpdate}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="TcmProceed"
//         component={TcmProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         initialParams={{ID, Scribe}}
//         name="Appointments"
//         component={Appointments}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="FacilityPropose"
//         component={FacilityPropose}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Accepted"
//         component={Accepted}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="CreateAppointment"
//         component={CreateAppointment}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Pending"
//         component={Pending}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name="PatientDetailClinic"
//         component={PatientDetailClinic}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Telemed1"
//         component={Telemed1}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Facility"
//         component={Facility}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="PatientDetails"
//         component={PatientDetails}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Calendar"
//         component={Calendar}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="Provider"
//         component={Provider}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Proceed"
//         component={Proceed}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

// const AppointmentDashboard = ({route, navigation}) => {
//   const {ID, Scribe} = route.params;

//   return (
//     <Stack.Navigator
//       initialRouteName="Appointments"
//       screenOptions={{orientation: 'portrait'}}>
//       <Stack.Screen
//         name="ProceedPropose"
//         component={ProceedPropose}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="SendMessage"
//         component={SendMessage}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="TransitionalList"
//         component={TransitionalList}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Demo"
//         component={Demo}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="PendingDetailView"
//         component={PendingDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProposedDetailView"
//         component={ProposedDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="PriorAuthProceed"
//         component={PriorAuthProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="DeclinedDetailView"
//         component={DeclinedDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="createdDeclinedList"
//         component={CreatedDeclinedList}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="createdFacilityDeclinedRef"
//         component={CreatedFacilityDeclinedRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="TcmDetailView"
//         component={TcmDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OpDetailView"
//         component={OpDetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeAccepted"
//         component={ScribeAccepted}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribePending"
//         component={ScribePending}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeTcmAccepted"
//         component={ScribeTcmAccepted}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeNotification"
//         component={ScribeNotification}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="DeclinedList"
//         component={DeclinedList}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityDeclinedRef"
//         component={FacilityDeclinedRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeProposedData"
//         component={ScribeProposedData}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityProceed"
//         component={FacilityProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeDeclined"
//         component={ScribeDeclined}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeFacDeclined"
//         component={ScribeFacDeclined}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProviderNotification"
//         component={ProviderNotification}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="ScribeFacilityAccepted"
//         component={ScribeFacilityAccepted}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeFacilityPending"
//         component={ScribeFacilityPending}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeFacilityProposed"
//         component={ScribeFacilityProposed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeOpLocationType"
//         component={ScribeOpLocationType}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="ScribeOpAccepted"
//         component={ScribeOpAccepted}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeCreateAppointment"
//         component={ScribeCreateAppointment}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeLocationType"
//         component={ScribeLocationType}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityAcceptedRef"
//         component={FacilityAcceptedRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         initialParams={{ID, Scribe}}
//         name="ScribeAppointments"
//         component={ScribeAppointments}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ScribeCreateAppointmentOS"
//         component={ScribeCreateAppointmentOS}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityPendingRef"
//         component={FacilityPendingRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Acceptedforcreated"
//         component={Acceptedforcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Pendingforcreated"
//         component={Pendingforcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="Proposedforcreated"
//         component={Proposedforcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="PendingforFcreated"
//         component={PendingforFcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="AcceptedforFcreated"
//         component={AcceptedforFcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProposedforFcreated"
//         component={ProposedforFcreated}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="FacilityProposeRef"
//         component={FacilityProposeRef}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OpPatientDetail"
//         component={OpPatientDetail}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="OpFacility"
//         component={OpFacility}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OutPatientReferralList"
//         component={OutpatientReferralList}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="Reschedule"
//         component={Reschedule}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="RescheduleProceed"
//         component={RescheduleProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="RescheduleProvider"
//         component={RescheduleProvider}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="OutPatientProceed"
//         component={OutPatientProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OpLocationType"
//         component={OpLocationType}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="OutPatientProvider"
//         component={OutPatientProvider}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="Dischargedate"
//         component={Dischargedate}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="TcmPatientDetail"
//         component={TcmPatientDetail}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="DetailView"
//         component={DetailView}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProposedData"
//         component={ProposedData}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="ProposeTime"
//         component={ProposeTime}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="Signin"
//         component={Signin}
//         options={{headerShown: false, animation: 'fade_from_bottom'}}
//       />

//       {/* <Stack.Screen
//                     name='Profile'
//                     component={Profile}
//                     options={{ headerShown: false,animation:'slide_from_left' }}
//                 /> */}
//       <Stack.Screen
//         name="NotesUpdate"
//         component={NotesUpdate}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />
//       <Stack.Screen
//         name="TcmProceed"
//         component={TcmProceed}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         initialParams={{ID, Scribe}}
//         name="Appointments"
//         component={Appointments}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="FacilityPropose"
//         component={FacilityPropose}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Accepted"
//         component={Accepted}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="CreateAppointment"
//         component={CreateAppointment}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Pending"
//         component={Pending}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name="PatientDetailClinic"
//         component={PatientDetailClinic}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Telemed1"
//         component={Telemed1}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Facility"
//         component={Facility}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="PatientDetails"
//         component={PatientDetails}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Calendar"
//         component={Calendar}
//         options={{headerShown: false, animation: 'slide_from_right'}}
//       />

//       <Stack.Screen
//         name="Provider"
//         component={Provider}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Proceed"
//         component={Proceed}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

export default LoginNavigator;
