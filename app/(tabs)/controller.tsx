import { SafeAreaView ,View,Image} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { useContext,useState } from "react";
import {socket} from '@/utils'
import {GestureHandlerRootView, Pressable, TouchableOpacity } from "react-native-gesture-handler";

export default function controller(){

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
    async function clickLeft(){

        socket.emit('click','a')
    }
    async function clickLeftOut(){

        socket.emit('click','a-')
    }
    async function clickRight(){

        socket.emit('click','d')
    }
    async function clickRightOut(){

        socket.emit('click','d-')
    }
    return(
        <GestureHandlerRootView style={{width:'100%', height:'90%'}} >

        <SafeAreaView style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:50, flexDirection:'column', height:'100%', width:'100%'}}>
            <View style={{display:'flex',justifyContent:'center', alignItems:'center',flexDirection:'row', height:'50%'}} >
                <TouchableOpacity onPressIn={clickUp} onPressOut={clickUpOut} style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',width:200, height:'100%', backgroundColor:'black', borderTopLeftRadius:30, padding:30, borderColor:'white', borderWidth:2}}><Image source={require('../../assets/images/accl.png')} /></TouchableOpacity>
                <TouchableOpacity onPressIn={clickRight} onPressOut={clickRightOut} style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',width:200, height:'100%',  borderTopRightRadius:30,  backgroundColor:'black', padding:30, borderColor:'white', borderWidth:2}}><Image source={require('../../assets/images/right.png')} /></TouchableOpacity>

            </View>
            <View style={{display:'flex',justifyContent:'center', alignItems:'center',flexDirection:'row', height:'50%'}} >
                <TouchableOpacity onPressIn={clickDown} onPressOut={clickDownOut} style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',width:200, height:'100%', backgroundColor:'black',  borderBottomLeftRadius:30, padding:30,  borderColor:'white', borderWidth:2}}><Image source={require('../../assets/images/accl.png')} /></TouchableOpacity>
                <TouchableOpacity onPressIn={clickLeft} onPressOut={clickLeftOut} style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',width:200, height:'100%', backgroundColor:'black',  borderBottomRightRadius:30, padding:30,  borderColor:'white', borderWidth:2}}><Image source={require('../../assets/images/left.png')} /></TouchableOpacity>

            </View>
        </SafeAreaView>
        </GestureHandlerRootView>

    )
}
