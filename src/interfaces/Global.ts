import { Dispatch, SetStateAction } from "react";

export interface IThemeState {
  darkMode: boolean,
  setDarkMode?: Dispatch<SetStateAction<boolean>>
}

interface IDark {
  default: string
  papper: string
  dark: string
}

interface IPalette {
  background: IDark
}

export interface ITheme {
  palette: IPalette
}