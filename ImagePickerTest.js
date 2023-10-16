
import * as ImagePicker from 'expo-image-picker';
import {View, Button, Image} from 'react-native';
import { useState } from 'react';

export default function ImagePickerTest(){
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    try {
      const ret = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3]
      })
      setImage(ret.assets[0].uri);
    } catch (error) {
      setImage(null);
    }
  }
  return(
    <View>
      <Button title="Image" onPress={pickImage}/>
      <Image source={{uri: image}} style={{width: 100, height: 100}}/>
    </View>
  )
}