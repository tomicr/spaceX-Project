import { ChangeEvent } from "react";
import { Launch } from "./LaunchTypes";
import { User } from "firebase";

export type ButtonProps = {
  title: string;
  type: "button" | "submit" | "reset";
};

export type LaunchProps = {
  launch: Launch;
};

export type PathParams = {
  id: string;
};

export type InputComponentProps = {
  type?: string;
  className?: string;
  id?: string;
  placeholder: string;
  value: string;
  onChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
};

export type ContextProps = {
  currentUser: User | null;
  login: any;
  signup: any;
  logout: any;
  resetPassword: any;
};

export type ThemeProps = {
  isDark: boolean;
  toggleTheme?: () => void;
};
