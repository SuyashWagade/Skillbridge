import api from "./api";

export const bookWorker = (data) => {
  return api.post("/api/bookings/create", data);
};
