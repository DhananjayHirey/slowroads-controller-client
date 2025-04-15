import React from 'react'
import { useState, useEffect } from 'react'
import { View, StyleSheet,Text,TouchableOpacity } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import {DeviceMotion} from 'expo-sensors'
import {socket} from '@/utils'
export default function App() {
  const [{ alpha, beta, gamma }, setData] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const [orien,setOrien] = useState('center');
  const [pressed,setPressed] = useState('');

  const _slow = () => DeviceMotion.setUpdateInterval(1000);
  const _fast = () => DeviceMotion.setUpdateInterval(16);

  const _subscribe = () => {
    DeviceMotion.setUpdateInterval(16)
    setSubscription(
      DeviceMotion.addListener(orienData => {
        setData(orienData.rotation);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  async function clickUp(){
    socket.emit('click','w')
  }
  async function clickUpOut(){
    socket.emit('click','w-')
  }
  async function clickDown(){
    socket.emit('click','s')
  }
  async function clickDownOut(){
    socket.emit('click','s-')
  }

  useEffect(()=>{
    if(orien=='center'){
      if(pressed=='left'){
        socket.emit('click','a-');
      }
      else{
        socket.emit('click','d-');
      }
    }
    else if(orien=='left'){
      socket.emit('click','a');
    }
    else{
      socket.emit('click','d');
    }
  },[orien])

  useEffect(()=>{
    if(beta<0.2 && beta>-0.2){
      setOrien('center');
    }
    else if(beta>0.2){
      setOrien('left');
      setPressed('left');
    }
    else{
      setOrien('right');
      setPressed('right');
    }
  },[beta])

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
    <>
      {/* <Text style={styles.text}>Gyroscope:</Text> */}
      {/* <Text style={styles.text}>x: {alpha}</Text> */}
      {/* <Text style={styles.text}>y: {beta}</Text> */}
      {/* <Text style={styles.text}>z: {gamma}</Text> */}
      {/* <View style={styles.container} >
        <Text style={styles.text} >{orien}</Text>

      </View> */}
      {/* <View style={styles.buttonContainer}> */}
        {/* <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity> */}
      {/* </View> */}
      <View style={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'center', height:'100%'}} >
          <TouchableOpacity onPressIn={clickUp} onPressOut={clickUpOut} style={{backgroundColor:'white', flexGrow:1}} ></TouchableOpacity>
          <TouchableOpacity onPressIn={clickDown} onPressOut={clickDownOut} style={{backgroundColor:'gray', flexGrow:1}} ></TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
        position:'absolute',
    transform:[{rotate:'-90deg'}],
        zIndex:2,
    left:0,
    top:'50%',
    // width:20
  },
  text: {
    textAlign: 'center',
    color:'white',
    padding:10,


    backgroundColor:'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    // alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});

