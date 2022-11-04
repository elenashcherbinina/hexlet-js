export const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstChar = text[0].toUpperCase();
  const rest = text.slice(1);
  return `${firstChar}${rest}`;
};
