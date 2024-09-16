import {
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import data, { navsocial } from "../../../data/navdata";
import { Link } from "../utility/Link";

const MobileNav = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<RxHamburgerMenu />}
        variant="outline"
      />
      <MenuList>
        {data.map((data, index) => (
          <Link href={data.path} key={index}>
            <MenuItem>{data.title}</MenuItem>
          </Link>
        ))}
        <Divider orientation="horizontal" />
        {navsocial.map((data, index) => (
          <Link href={data.path} key={index}>
            <MenuItem>Join {data.title}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MobileNav;
