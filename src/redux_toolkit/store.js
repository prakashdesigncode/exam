import { configureStore } from "@reduxjs/toolkit";
import { themeColor } from "./rudecers/themeReducer";
export const store = configureStore({reducer:{themeColor}})