"use client";
import Carousel from "@/components/Carousel";
const Map = dynamic(() => import("../../components/Map/index"), { ssr: false });
import { usePlacesContext } from "@/contexts/PlacesContext";
import { Place, PlaceDetails } from "@/domains/Places/types";
import useCoordinates from "@/hooks/useCoordinates";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMapPin } from "react-icons/fa";

const PlaceDetailsPage: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place>();
  const { convertCoordinates } = useCoordinates();
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
      {/* Skeleton do carousel */}
      <div className="relative h-[50vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] xl:h-[50vh] portrait:h-[15vh] mb-8">
        {loading || !placeDetails || !selectedPlace ? (
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg">
            <div className="w-full h-full bg-gray-300 rounded-lg"></div>
          </div>
        ) : (
          <Carousel images={placeDetails?.carouselImages || []} />
        )}
      </div>

      {/* Skeleton do nome do local */}
      {loading || !placeDetails || !selectedPlace ? (
        <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded-lg mb-4"></div>
      ) : (
        <h1 className="text-4xl font-bold mb-4">{selectedPlace?.name}</h1>
      )}

      {/* Skeleton do ícone e localização */}
      {loading || !placeDetails || !selectedPlace ? (
        <div className="flex items-center space-x-2 mb-4">
          <div className="h-8 w-8 bg-gray-200 animate-pulse rounded-full"></div>
          <div className="h-6 w-1/2 bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
      ) : (
        <div className="flex items-center space-x-2 mb-4">
          <FaMapPin className="text-red-500 text-2xl" />
          <span className="text-lg font-semibold">
            {placeDetails?.location}
          </span>
        </div>
      )}

      {/* Skeleton da descrição */}
      {loading || !placeDetails || !selectedPlace ? (
        <div className="space-y-2 mb-8">
          <div className="h-6 w-full bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="h-6 w-5/6 bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="h-6 w-4/6 bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
      ) : (
        <p className="text-lg mb-8 text-justify">{placeDetails?.description}</p>
      )}

      {/* Skeleton do mapa */}
      {loading || !placeDetails || !selectedPlace ? (
        <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg mb-8"></div>
      ) : (
        selectedPlace?.description && (
          <div className="w-full h-[400px] mb-8">
            <Map
              coordinates={convertCoordinates(
                placeDetails?.locationCoordinates || "-29.2544,-51.5312"
              )}
            />
          </div>
        )
      )}
    </div>
  );
};

export default PlaceDetailsPage;
