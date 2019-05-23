console.log('process.env', process.env);
export const BACKEND_URL = process.env.NODE_ENV === 'development' ? `http://localhost:3001/app` : "https://api.giphy.com";

export const STATE_NAME = {
  ITEM_LIST: "itemList"
};
