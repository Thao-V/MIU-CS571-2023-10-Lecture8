import { Camera, CameraType } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import { ActivityIndicator, View, Button, Image } from "react-native";
import * as ML from 'expo-media-library';
export default function CameraTest() {
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const camera = useRef();
  useEffect(() => {
    async function requestPermission() {
      try {
        const ret = await Camera.requestCameraPermissionsAsync();
        console.log(ret);
        if (ret.status === "granted") {
          setLoading(false);
        }
        await ML.requestPermissionsAsync();
      } catch (error) {}
    }
    requestPermission();
  }, []);
  const takePicture = async () => {
    try {
      const photo = await camera.current.takePictureAsync();
      setPhoto(photo);
      await ML.createAssetAsync(photo.uri);
    } catch (error) {}
  };

  const flip = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Camera style={{ width: "100%", height: "100%" }} type={type} ref={camera}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "transparent",
          marginBottom: 50
        }}
      >
        {photo &&
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: photo.uri }}
          />}
        <Button title="Take Picture" onPress={takePicture} />
        <Button title="Flip" onPress={flip} />
      </View>
    </Camera>
  );
}
