import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  List,
  ListItem,
  Image,
  HStack,
  Button,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  selectedgenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre, selectedgenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null; // Don't render anything if error fetching
  if (isLoading) return <Spinner />; // Render loading spinner

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant="link"
              fontSize="lg"
              fontWeight={selectedgenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
