import { Dispatch } from 'react';

export interface IBackground {
  dark: string;
  default: string;
  paper: string;
}

export interface IAUth {
  darkMode: boolean,
  setDarkMode: Dispatch<boolean>
}

export interface IDark {
  dark?: string;
}

export interface IButtonText {
  buttonText: string
}