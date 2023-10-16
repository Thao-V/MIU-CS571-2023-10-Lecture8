import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LocationTest from './LocationTest';
import ImagePickerTest from './ImagePickerTest';
import CameraTest from './CameraTest';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <LocationTest/> */}
        {/* <ImagePickerTest/> */}
        <CameraTest/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
