import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

export default function Historico() {
  const [data, setData] = useState<any[]>([]);

  const load = async () => {
    try {
      const res = await axios.get("http://192.168.1.29:3000/locations");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Histórico de Localizações
      </Text>

      {data.length === 0 ? (
        <Text style={{ marginTop: 20 }}>Sem dados ainda...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>Latitude: {item.latitude}</Text>
              <Text>Longitude: {item.longitude}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}