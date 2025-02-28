# 🎥 Mini YouTube Clone

## link to YouTube video short showcase: https://www.youtube.com/shorts/OvPOh1RSv40

[![Expo](https://img.shields.io/badge/Expo-latest-blue.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-latest-blue.svg)](https://reactnative.dev/)
[![react-native-video](https://img.shields.io/badge/react--native--video-latest-blue.svg)](https://reactnative.dev/)

A simplified YouTube clone built with React Native and Expo. This mobile application provides a streamlined video browsing experience with core YouTube-like functionality.

## 🚀 Features

### 📲 Core Features

- Video browsing and playback with custom video controls based on **react-native-video** lib
- Horizontal scrolling video sections with categorized content
- Search screen with filtering and sorting functionality
- Detailed video view with statistics and descriptions
- Login screen with navigation integration

### 🎨 UI/UX Features

- Responsive layouts for all devices
- Custom fonts implementation (Poppins)
- Clean and modern interface
- Loading state management
- Section-based content organization

## 🏗 Technical Architecture

- `app/` - Expo Router configuration and main routes
- `context/` - Global state management and context providers
- `screens/` - Main screen components with business logic
- `components/` - Reusable UI components (SearchBar, Section, VideoCard)
- `modals/` - Modal components for overlays and popups
- `styles/` - Global styling constants and theme configuration
- `assets/` - Static resources

## 🔧 Development Setup

### Prerequisites

- Node.js >= 16
- npm or yarn
- iOS Simulator / Android Emulator
- Expo Go app for physical device testing

### Installation

1. Clone the repository:

```bash
git clone https://github.com/BartlomiejSadza/mini-yt
cd mini-yt
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npx expo start
```

4. Run on platform:

```bash
# iOS
npx expo run:ios

# Android
npx expo run:android
```

## 🤝 Pozdrawiam
