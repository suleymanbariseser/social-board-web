import { SxProps, Theme } from "@mui/material";

type StyleMap<K extends string> = Record<K, SxProps<Theme>>;

export default StyleMap