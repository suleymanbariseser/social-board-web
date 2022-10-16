export type StyleType<T extends string = ''> = Partial<Record<T, number | any>>;

function mergeStyles<T extends string = ''>(
  ...allStyles: StyleType<T>[]
): StyleType<T> {
  let styles: StyleType<any> = {};
  allStyles.forEach((style) => {
    Object.entries(style).forEach(([styleName, styleValue]) => {
      if (!styles[styleName]) {
        styles[styleName] = [styleValue];
      } else {
        styles[styleName] = [...styles[styleName], styleValue];
      }
    });
  });

  return styles;
}

export default mergeStyles;
