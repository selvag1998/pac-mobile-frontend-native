import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const TermsandConditions = ({navigation}) => {
  const handleNavigateBack = () => {
    navigation.goBack();
  };

  return (    
      <ScrollView style={styles.container}>
      <Text style={{ color: '#11266c', textAlign: 'center', fontSize: 21, fontWeight: 'bold', marginLeft:0 ,marginTop:20,fontFamily: 'SpaceGrotesk-Regular' }}>VisdocApp Terms of Use</Text>
      <Text style={{color: '#222222',fontSize: 20,  marginLeft:3 ,marginTop:20, fontFamily: 'SpaceGrotesk-Regular'}}>1. Introduction</Text>
      <Text style={{color: '#555555', textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - VisdocApp is a comprehensive telehealth scheduling and management application, developed
        and operated by Xela Healthcare Solutions (XHS). It is designed to streamline the process of
        arranging and managing telehealth appointments for clinicians and patients.
      </Text>
      <Text style={{color: '#222222',fontSize: 20,  marginLeft:3 ,marginTop:20, fontFamily: 'SpaceGrotesk-Regular'}}>2. Appointment Scheduling and Management</Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - Appointment requests made by patients are distributed to all available clinicians within 
        the XHS network.
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - Clinicians receive real-time notifications through multiple channels, including email, 
        text messages, and mobile app notifications, allowing them to promptly respond to 
        appointment requests. 
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - Clinicians have the option to accept the proposed appointment time, reject it, or 
        suggest an alternative time. 
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - Upon acceptance of an appointment request, the appointment is automatically 
        scheduled in VisdocApp. Both the patient and the clinician receive confirmation 
        notifications.
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - The scheduled appointments are integrated into the clinician's digital calendar, which 
        is accessible through both the web and mobile versions of VisdocApp. 
      </Text>
      <Text style={{color: '#222222',fontSize: 20,  marginLeft:3 ,marginTop:20, fontFamily: 'SpaceGrotesk-Regular'}}>3. Cancellation and Rescheduling</Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - If an appointment is cancelled by either party, VisdocApp ensures that both the patient 
        and the clinician are immediately informed of the cancellation.
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - The system provides options for rescheduling, facilitating seamless communication 
        between the patient and the clinician. 
      </Text>
      <Text style={{color: '#222222',fontSize: 20,  marginLeft:3 ,marginTop:20, fontFamily: 'SpaceGrotesk-Regular'}}>4. Telehealth Services and Documentation</Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - VisdocApp enables clinicians to access comprehensive patient charts, conduct 
        telehealth visits, and document these sessions with ease.
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - The platform offers robust features to ensure that all necessary medical information is 
        readily available and securely stored.
      </Text>
      <Text style={{color: '#222222',fontSize: 20,  marginLeft:3 ,marginTop:20, fontFamily: 'SpaceGrotesk-Regular'}}>5. Liability and Responsibilities</Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - XHS's responsibility is confined to providing the telehealth coordination service and the 
    VisdocApp software.
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - XHS does not involve itself in the clinical decision-making process. The clinicians are 
    solely responsible for their medical decisions and advice.
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - XHS will not be held accountable for instances of patient non-attendance (no-shows). - While XHS aims to provide uninterrupted access to the software, it is not responsible 
    for service outages that are beyond its control. 
      </Text>
      <Text style={{color: '#222222',fontSize: 20,  marginLeft:3 ,marginTop:20, fontFamily: 'SpaceGrotesk-Regular'}}>6. Data Access, Confidentiality, and Security</Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
      - Clinicians have continuous access to patient charts, including the ability to view, print, 
    or download these documents from both the web and mobile applications. 
    </Text>
    <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
      - XHS is committed to ensuring that VisdocApp adheres to the highest standards of data 
    security and privacy, in compliance with healthcare regulations such as HIPAA. 
    </Text>
    <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
      - Both clinicians and patients are responsible for safeguarding their account details and 
    must immediately report any unauthorized use or security breaches. 
      </Text>
      <Text style={{color: '#222222',fontSize: 20,  marginLeft:3 ,marginTop:20, fontFamily: 'SpaceGrotesk-Regular'}}>7. Training and Support</Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - XHS provides comprehensive training to clinicians on how to effectively use VisdocApp, 
        ensuring they are well-equipped to utilize all the features of the software.
      </Text>
      <Text style={{color: '#222222',fontSize: 20,  marginLeft:3 ,marginTop:20, fontFamily: 'SpaceGrotesk-Regular'}}>8. Intellectual Property Rights</Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - VisdocApp, including its software, design, and content, is the exclusive intellectual 
        property of XHS. 
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
        - Clinicians are expressly prohibited from copying, modifying, or distributing the 
        software, and from granting access to unauthorized third parties. 
      </Text>
      <Text style={{color: '#333333',fontSize: 20,  marginLeft:3 ,marginTop:20, fontFamily: 'SpaceGrotesk-Regular'}}>Additional Clause:</Text>
      <Text style={{color: '#222222',fontSize: 20,  marginLeft:3 ,marginTop:8, fontFamily: 'SpaceGrotesk-Regular'}}>9. Compliance and Reporting</Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
      - VisdocApp will comply with all relevant healthcare privacy laws and regulations, and 
        expects its users to do the same.
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
      - Users are obliged to maintain the confidentiality of their login information and are 
        responsible for all activities under their account.
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:12 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>
      - Any breach of data security or unauthorized use of the software must be immediately 
        reported to XHS.
      </Text>
      <Text style={{color: '#555555',textAlign: 'justify', paddingRight:10, fontSize: 17,marginLeft:8 ,marginTop:5, fontFamily: 'SpaceGrotesk-Regular'}}>      
        By using VisdocApp, users agree to adhere to these terms of use. XHS reserves the right to 
        amend these terms at any point, with immediate effect upon posting. Continued usage of 
        VisdocApp after such changes constitutes agreement to the revised terms.
      </Text>
      <TouchableOpacity onPress={handleNavigateBack} style={styles.buttonContainer}>
        <Animated.View style={styles.button}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Animated.View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TermsandConditions;

const styles = StyleSheet.create({
    Itemcontainer:{
        marginRight:16,
    },
    rowFront: {
        paddingLeft:16,
        backgroundColor: '#dcdcdc',
      },
      rowBack: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft:0,
      },
      buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
      },
      button: {
        width: 100,
        height: 40,
        backgroundColor: '#11266c',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'SpaceGrotesk-Regular',
      },
      backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
      },
      backRightBtnLeft: {
        backgroundColor: '#808080',
        left: 0,
        borderRadius: 0,
      },
      backRightBtnRight: {
        backgroundColor: 'green',
        right: 0,
        borderRadius:0,
        width:75
      },
    Contentview:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'center'
    },
});