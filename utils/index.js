import {Platform} from "react-native"
import {io} from 'socket.io-client'
export const BaseUrl = Platform.OS==='android'?'exp://172.22.26.74:8081':'http://localhost:3000';
export const socket = io.connect('http://172.22.26.74:4000')