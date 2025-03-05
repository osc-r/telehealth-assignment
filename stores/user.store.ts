import { create } from "zustand";

type UserState = { isLogin: boolean };
type UserAction = {
  login: () => void;
  logout: () => void;
};

export const useUserStore = create<UserState & UserAction>((set) => ({
  isLogin: false,
  login: () => set({ isLogin: true }),
  logout: () => set({ isLogin: false }),
}));
