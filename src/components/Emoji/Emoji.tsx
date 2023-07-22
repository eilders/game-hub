import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../../assets/emojis/bulls-eye.webp";
import meh from "../../assets/emojis/meh.webp";
import thumbsUp from "../../assets/emojis/thumbs-up.webp";

interface EmojiProps {
  rating: number;
}
const Emoji = (props: EmojiProps) => {
  const { rating } = props;
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};
export default Emoji;
