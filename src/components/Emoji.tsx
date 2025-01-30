import bullseyeEmoji from "../assets/bulls-eye.webp";
import thumbsupEmoji from "../assets/thumbs-up.webp";
import mehEmoji from "../assets/meh.webp";
import { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: mehEmoji, alt: "meh", boxSize: "25px" },
    4: { src: thumbsupEmoji, alt: "recommended", boxSize: "25px" },
    5: { src: bullseyeEmoji, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
