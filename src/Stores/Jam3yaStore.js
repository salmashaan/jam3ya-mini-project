import { makeAutoObservable } from "mobx";
import api from "./api";

class Jam3yaStore {
  jam3yas = [];

  constructor() {
    makeAutoObservable(this, {});
  }

  fetchJam3yas = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.jam3yas = response.data;
    } catch (error) {
      console.error("Jam3yaStore -> fetchJam3ya -> error", error);
    }
  };

  createJam3ya = async (jam3ya) => {
    try {
      const response = await api.post("/jam3ya", jam3ya);
      this.courses.push(response.data);
    } catch (error) {
      console.log("Jam3yaStore -> createJam3ya -> error", error);
    }
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3yas();
export default jam3yaStore;
