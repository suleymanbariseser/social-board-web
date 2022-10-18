import { SxProps, Theme } from "@mui/material";

type StyleMap<K extends string> = Partial<Record<K, SxProps<Theme>>>;

export default StyleMap