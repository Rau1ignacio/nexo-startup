const TOKEN_KEY = "nexo_token";

export const storage = {
  getToken: () => window.localStorage.getItem(TOKEN_KEY),
  setToken: (value) => window.localStorage.setItem(TOKEN_KEY, value),
  clearToken: () => window.localStorage.removeItem(TOKEN_KEY),
};
