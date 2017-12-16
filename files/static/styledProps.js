export default function styledProps({
  align,
  background,
  color,
  display,
  flex,
  fontSize,
  fontWeight,
  height,
  margin,
  padding,
  position,
  width
}) {
  return `
    background: ${background};
    color: ${color};
    display: ${display};
    flex-align: ${align};
    flex: ${flex};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    height: ${height}px;
    margin: ${margin}px;
    padding: ${padding}px;
    position: ${position};
    width: ${width}px;
  `
}
