import { ADD_ARTICLE } from "../constants/action-types";
import { USER_LOGIN } from "../constants/action-types";

export const addArticle = (payload) => {
    return { type: ADD_ARTICLE, payload };
  }

export const userLogin = (payload) => {
    return { type: USER_LOGIN, payload };
}