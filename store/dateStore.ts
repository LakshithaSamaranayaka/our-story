import { create } from "zustand";

interface DateStoreState {
  dateType: string;
  date: string;
  time: string;
  location: string;
  phone: string;
  instagram: string;
  setDateType: (value: string) => void;
  setDate: (value: string) => void;
  setTime: (value: string) => void;
  setLocation: (value: string) => void;
  setPhone: (value: string) => void;
  setInstagram: (value: string) => void;
}

export const useDateStore = create<DateStoreState>((set) => ({
  dateType: "",
  date: "",
  time: "",
  location: "",
  phone: "",
  instagram: "",
  setDateType: (value) => set({ dateType: value }),
  setDate: (value) => set({ date: value }),
  setTime: (value) => set({ time: value }),
  setLocation: (value) => set({ location: value }),
  setPhone: (value) => set({ phone: value }),
  setInstagram: (value) => set({ instagram: value }),
}));
