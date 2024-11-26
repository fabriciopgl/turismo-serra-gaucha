type PlaceType = "restaurant" | "atraction" | "route";

export type Place = {
  id: number;
  name: string;
  description: string;
  image: string;
  type: PlaceType[];
};

interface CarouselImage {
  carouselImages: string[];
}

export interface PlaceDetails extends CarouselImage {
  placeId: string;
  location: string;
}
