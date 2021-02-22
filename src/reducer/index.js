import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import dealReducer from "./dealReducer";
import getDealsReducer from "./getDealsReducer";
import discussionReducer from "./discussionReducer";
import getDiscussionsReducer from "./getDiscussionsReducer";
import profileReducer from "./profileReducer";
import commentReducer from "./commentReducer";
import getUserReducer from "./getUserReducer";
import footerInfoReducer from "./footerInfoReducer";
import DealCommentsReducer from "./DealCommentsReducer";
import DiscussionCommentsReducer from "./DiscussionCommentsReducer";

export default combineReducers({
  AuthReducer,
  dealReducer,
  getDealsReducer,
  discussionReducer,
  getDiscussionsReducer,
  profileReducer,
  commentReducer,
  getUserReducer,
  footerInfoReducer,
  DealCommentsReducer,
  DiscussionCommentsReducer,
});
