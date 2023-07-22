import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import { PlatformProps } from "../../hooks/useGames";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: PlatformProps) => void;
  selectedPlatform: PlatformProps | null;
}

const PlatformSelector = (props: PlatformSelectorProps) => {
  const { onSelectPlatform, selectedPlatform } = props;
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatformSelector;
