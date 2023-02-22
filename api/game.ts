import axios from "axios";

export const createGameAPI = async (payload: { gameId: string }) => {
  const { data } = await axios.post("/api/game/create", payload);
  return data;
};

export const joinGameAPI = async (payload: { gameId: string }) => {
  const { data } = await axios.post("/api/game/join", payload);
  return data;
};

export const answerQuestionAPI = async (payload: { answer: string }) => {
  const { data } = await axios.post("/api/game/answer", payload);
  return data;
};
