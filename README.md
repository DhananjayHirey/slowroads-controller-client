# 🕹️ SlowRoads.io Mobile Controller

A React Native controller app (built with Expo) that turns your phone into a **steering wheel** for the browser game [slowroads.io](https://slowroads.io), using **tilt-based controls**. Communicates with a local PC server via **Socket.IO** over Wi-Fi.

## 📱 Features

- 📡 Real-time control using **Socket.IO**
- 🧭 **Tilt-based steering** (accelerometer/gyroscope)
- 🎮 Designed for playing [slowroads.io](https://slowroads.io) in Chrome
- ⚙️ Backend server using **Node.js + Express + Socket.IO**
- 🔧 Easily customizable for other browser games

---

## 🏗️ Tech Stack

### Client (Mobile)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Socket.IO-client](https://socket.io/docs/v4/client-api/)
- [expo-sensors](https://docs.expo.dev/versions/latest/sdk/sensors/) (for gyroscope / accelerometer)

### Server (Desktop)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [robotjs](https://github.com/octalmage/robotjs) (for simulating keyboard input)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/slowroads-controller.git
cd slowroads-controller

