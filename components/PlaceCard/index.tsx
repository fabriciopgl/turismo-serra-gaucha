import { useFavorites } from "@/contexts/FavoritePlacesContext";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { HeartIcon } from "./HeartIcon";

type Props = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  favorite: boolean;
};

export default function PlaceCard({
  id,
  name,
  description,
  imageUrl,
  favorite,
}: Props) {
  const router = useRouter();
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  return (
    <Card className="w-80 h-90 mx-auto shadow-lg transition-transform transform-gpu hover:scale-105 active:scale-100 cursor-pointer">
      <Image
        src={imageUrl}
        alt={name}
        width={"100%"}
        height={250}
        className="object-cover rounded-t-lg"
      />
      <CardBody className="flex flex-col h-full p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-2">{name}</h1>
        <section className="text-sm text-gray-600 mb-4 flex-1">
          {description}
        </section>
        <div className="flex flex-row justify-between items-center gap-2">
          <Button
            onClick={() => {
              router.push(
                `${process.env.NEXT_PUBLIC_PLACE_DETAILS_BASE_PATH}?placeId=${id}`
              );
            }}
            className="mt-auto bg-green-800 text-white font-semibold py-2 rounded-lg transition-colors duration-300 hover:bg-green-700 w-full"
          >
            Ver mais
          </Button>
          <Button
            isIconOnly
            className="text-default-900/60 data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
            onPress={() => {
              const isFavorite = favorites?.includes(id);

              if (isFavorite) {
                removeFavorite(id);
              } else {
                addFavorite(id);
              }
            }}
          >
            <HeartIcon
              className={
                favorite ? "[&>path]:stroke-transparent fill-red-500" : ""
              }
              fill={favorite ? "currentColor" : "none"}
              width={undefined}
              height={undefined}
            />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
