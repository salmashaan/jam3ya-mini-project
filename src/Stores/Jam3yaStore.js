import axios from "axios";
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
      this.jam3yas.push(response.data);
    } catch (error) {
      console.log("Jam3yaStore -> createJam3ya -> error", error);
    }
  };

  addUser = async (jam3yaId) => {
    try {
      const response = await api.post(`/jam3ya/join/${jam3yaId}`);

      this.jam3yas = this.jam3yas.map((jam3ya) =>
        jam3ya._id === jam3yaId ? response.data : jam3ya
      );
    } catch (error) {}
  };

  leave = async (jam3yaId) => {
    try {
      const response = await api.post(`/jam3ya/leave/${jam3yaId}`);

      this.jam3yas = this.jam3yas.map((jam3ya) =>
        jam3ya._id === jam3yaId ? response.data : jam3ya
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  deleteJam3ya = async (id) => {
    try {
      console.log(id);
      await api.delete(`/jam3ya/${id}`);
      this.jam3yas = this.jam3yas.filter((jam3ya) => jam3ya._id !== id);
    } catch (error) {
      console.log("error", error);
    }
  };
}

const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3yas();
export default jam3yaStore;
