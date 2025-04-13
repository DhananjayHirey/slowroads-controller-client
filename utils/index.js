import {Platform} from "react-native"
import {io} from 'socket.io-client'
export const BaseUrl = Platform.OS==='android'?'exp://172.22.36.155:8081':'http://localhost:3000';
export const socket = io.connect('http://172.22.36.155:4000')