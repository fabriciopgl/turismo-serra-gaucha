"use client";
import { useSearchParams } from "next/navigation";

const PlaceDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const placeId = searchParams.get("placeId");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{placeId}</h1>
      <p>Teste</p>
    </div>
  );
};

export default PlaceDetails;
