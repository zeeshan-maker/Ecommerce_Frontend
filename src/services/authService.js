import api from "./api";

export const registerUser = async (data) => {
  const res = await api.post("/auth/register", data);
  return res?.data;
};

export const loginUser = async (credentials) => {
  const res = await api.post("/auth/login", credentials);
  return res?.data;
};

export const forgotPassword = async (email) => {
  const res = await api.post("/auth/forgot-password", { email: email });
  return res.data;
};

export const resetPassword = async (token, password) => {
  const res = await api.post(`/auth/reset-password/${token}`, {
    newPassword: password,
  });
  return res.data;
};

export const updateProfileImage = async (file) => {
  const res = await api.put("/auth/update-profile", file);
  return res.data;
};
