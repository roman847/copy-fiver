import { createSlice } from "@reduxjs/toolkit";
import { IServiceItemProps } from "./../../core/interfaces/props/index";

interface IGigsItem {
  id: number;
  img: string;
  pp: string;
  desc: string;
  price: number;
  star: number;
  username: string;
}

interface IState {
  gigsCategory: IServiceItemProps;
  currentGig: IGigsItem;
}

const initialState: IState = {
  gigsCategory: {
    id: 0,
    img: "",
    title: "",
    desc: "",
  },
  currentGig: {
    id: 0,
    img: "",
    pp: "",
    desc: "",
    price: 0,
    star: 0,
    username: "",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setGigsCategory: (state, { payload }) => {
      state.gigsCategory = payload;
    },
    setCurrentGig: (state, { payload }) => {
      state.currentGig = payload;
    },
  },
});

export const { setGigsCategory, setCurrentGig } = appSlice.actions;

export default appSlice.reducer;
