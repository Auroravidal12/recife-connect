import axios from "axios";

const API_URL =
  "https://dados.recife.pe.gov.br/api/action/datastore_search?resource_id=7927e663-6753-489c-943c-f20cdd72555e";

export const getData = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data.result.records;
  } catch (error) {
    console.log("Erro API:", error);
    return [];
  }
};