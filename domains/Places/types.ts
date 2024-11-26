type PlaceType = "restaurant" | "atraction" | "route";

export type Place = {
  id: number;
  name: string;
  description: string;
  image: string;
  type: PlaceType[];
};
