import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const { width, height } = Dimensions.get('window')

export default function LocationTest(){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState(null);
  useEffect(() => {
    async function requestPermission(){
      try {
        const ret = await Location.requestForegroundPermissionsAsync();
        console.log(ret);
        if(ret.status === 'granted'){
          setLoading(false);
          const loc = await Location.getCurrentPositionAsync();
          setCoords(loc.coords);
        }else{
          setLoading(false);
          setError("Cannot access the location");
        }
      } catch (error) {
        setLoading(false);
        setError("Cannot access the location");
      }
    }
    requestPermission();
  }, [])
  if(loading){
    return <ActivityIndicator size="large"/>
  }
  if(error){
    return(
      <Text>{error}</Text>
    )
  }
  return (
    <MapView style={{width, height,}}>
      <View style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignItems: "center",
        marginBottom: 50,
        backgroundColor: "transparent"
      }}>
        <Text>MIU Campus</Text>
      </View>
    </MapView>
  )
}