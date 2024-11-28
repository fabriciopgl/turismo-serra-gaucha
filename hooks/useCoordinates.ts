export const useCoordinates = () => {
  const convertCoordinates = (coordinatesStr: string) => {
    const [latStr, lngStr] = coordinatesStr.split(",");
    const lat = parseFloat(latStr);
    const lng = parseFloat(lngStr);

    return { lat, lng };
  };

  return { convertCoordinates };
};

export default useCoordinates;
