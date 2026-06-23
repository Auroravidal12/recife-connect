import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getData } from "../../services/api";

export default function Home() {
  const [ubs, setUbs] = useState<any[]>([]);

  useEffect(() => {
    async function carregarDados() {
      const dados = await getData();
      setUbs(dados.slice(0, 10));
    }

    carregarDados();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        UBS do Recife
      </Text>

      <FlatList
        data={ubs}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 12,
              padding: 10,
              borderWidth: 1,
              borderRadius: 8,
            }}
          >
            <Text>
              {item.nome ||
                item.NOME ||
                item.unidade ||
                item.UNIDADE ||
                "UBS"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}