import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView
} from 'react-native';

//import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
import { Value } from 'react-native-reanimated';



export default class Messages extends Component{
  constructor(props){
    super(props);
    this.state = {
      question:'',
      reply:'',
      userId:firebase.auth().currentUser.email,
      roomId:''
    }
  }
  sendQuestion=(q,r)=>{
    db.collection('messages').add({
      question:q,roomId:r
    })
  }

  render(){
   return(
     <KeyboardAvoidingView behavior = 'padding' enabled>
     <View>

     <TouchableOpacity
     onPress = {()=>{this.sendQuestion(this.state.question,this.state.roomId)
    Alert.alert('Question Sent!')
  }}> 
  <Text>Send</Text>
   </TouchableOpacity>
  
      <TextInput 
      placeholder = 'Type Your Question..' 
      multiline = {"true"} 
      onChangeText = {(t)=>{this.setState({question:t})
    }}
      value={this.state.question}
    ></TextInput>
      
    
    

      
     </View>
     </KeyboardAvoidingView>
   ) 
  }
}  