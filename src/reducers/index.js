import { ADD_ARTICLE, USER_LOGIN } from "../constants/action-types";

const initialState = {
    articles: [],
    userLoginData: []
  };
const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
          articles: state.articles.concat(action.payload)
        });
      }
    if (action.type === USER_LOGIN) {
        return Object.assign({}, state, {
          userLoginData: state.userLoginData.concat(action.payload)
        });
      }
    return state;
  };
  export default rootReducer;
  