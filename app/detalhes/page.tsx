"use client";
import Carousel from "@/components/Carousel";
import { usePlacesContext } from "@/contexts/PlacesContext";
import { Place, PlaceDetails } from "@/domains/Places/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMapPin } from "react-icons/fa";

const PlaceDetailsComponent: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place>();
  const { places, placeDetails, loading, fetchPlaceDetails } =
    usePlacesContext();
  const searchParams = useSearchParams();
  const placeId = searchParams.get("placeId");

  useEffect(() => {
    if (places.length > 0)
      setSelectedPlace(places.find((p) => p.id === Number(placeId)));
  }, [placeId, places]);

  useEffect(() => {
    const getDetails = async () => {
      fetchPlaceDetails(placeId || "");
    };

    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId]);

  return (
    <div className="container mx-auto p-4">
      <div className="relative h-[50vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] xl:h-[50vh] portrait:h-[15vh] mb-8">
        {loading ? (
          // Skeleton loader enquanto os dados são carregados
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg">
            <div className="w-full h-full bg-gray-300 rounded-lg"></div>
          </div>
        ) : (
          // Carousel real depois que os dados foram carregados
          <Carousel images={placeDetails?.carouselImages || []} />
        )}
      </div>

      {/* Nome do local */}
      <h1 className="text-4xl font-bold mb-4">{selectedPlace?.name}</h1>

      <div className="flex items-center space-x-2 mb-4">
        <FaMapPin className="text-red-500" />
        <span className="text-lg">{placeDetails?.location}</span>
      </div>

      {/* Descrição do local */}
      <p className="text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
        amet sapien eu ligula blandit consequat. Integer eget dolor in lacus
        posuere volutpat.
      </p>

      {/* Mapa com a localização */}
      {selectedPlace?.description && (
        <div className="w-full h-[400px] mb-8"></div>
      )}
    </div>
  );
};

export default PlaceDetailsComponent;
