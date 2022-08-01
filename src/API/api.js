import * as axios from "axios";

export const dataApi = {
  sendData(newMyIdea, achievments) {
    axios({
      method: "post",
      url: "http://localhost:5000/postideas",
      data: [...newMyIdea, ...achievments],
    });
  },

  getAchivsData() {
    return axios({
      method: "get",
      url: "http://localhost:5000/getideas",
    }).then(function(response) {
      return response.data.achivFilter;
    });
  },
  getIdeasData() {
    return axios({
      method: "get",
      url: "http://localhost:5000/getideas",
    }).then(function(response) {
      return response.data.ideasFilter;
    });
  },
};
