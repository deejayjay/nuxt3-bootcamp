export const useUtils = () => {
  const capitalize = (str) => str.trim().charAt(0).toUpperCase() + str.slice(1);

  return { capitalize };
};
