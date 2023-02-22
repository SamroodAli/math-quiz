import axios from "axios";

export const startGameAPI = async (payload: { gameId: string }) => {
  const { data } = await axios.post("/api/game/start", payload);
  return data;
};

export const answerQuestionAPI = async (payload: { answer: string }) => {
  const { data } = await axios.post("/api/game/answer", payload);
  return data;
};
