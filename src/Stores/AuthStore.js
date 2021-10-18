import { makeAutoObservable } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  // setUser = (token) => {
  //   localStorage.setItem("myToken", token);
  //   api.defaults.headers.common.Authorization = `Bearer ${token}`;
  //   this.user = decode(token);
  // };

  // logging = async (userDate, path) => {
  //   try {
  //     const response = await api.post(`/${path}`, userDate);
  //     this.setUser(response.data.token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  signup = async (userData) => {
    try {
      await api.post("/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await api.post("/signin", userData);
      console.log("authStore -> signin -> res.data", res.data);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  logout = () => {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  checkForToken = () => {
    // this.user = null
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now(); // give us the current time
      let tempUser = decode(token);
      if (tempUser.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
