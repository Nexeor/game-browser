import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectOrder, selectedOrder }: Props) => {
  const orderings = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Title" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "New" },
    { value: "-rating", label: "User Score" },
    { value: "-metacritic", label: "Metacritic Score" },
  ];

  const currentOrdering = orderings.find(
    (ordering) => ordering.value === selectedOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentOrdering?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderings.map((ordering) => (
          <MenuItem
            onClick={() => onSelectOrder(ordering.value)}
            key={ordering.value}
            value={ordering.value}
          >
            {ordering.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
