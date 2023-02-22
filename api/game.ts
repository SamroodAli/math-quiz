import axios from "axios";

interface CreateGamePayload {
  gameId: string;
}
export const createGameApi = async (payload: CreateGamePayload) => {
  const { data } = await axios.post("/", payload);
  return data;
};
