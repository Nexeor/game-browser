import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { List, ListItem, Image, HStack, Text, Spinner } from "@chakra-ui/react";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
