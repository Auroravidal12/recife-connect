import { useEffect, useRef, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

export default function Local() {
  const [location, setLocation] = useState<any>(null);
  const hasSent = useRef(false);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permissão negada");
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    const coords = loc.coords;

    setLocation(coords);

    try {
      await axios.post("http://192.168.1.29:3000/location", {
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (hasSent.current) return;

    hasSent.current = true;
    getLocation();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Localização</Text>

      {location && (
        <>
          <Text>Lat: {location.latitude}</Text>
          <Text>Lng: {location.longitude}</Text>
        </>
      )}

      <Button title="Atualizar" onPress={getLocation} />
    </View>
  );
}