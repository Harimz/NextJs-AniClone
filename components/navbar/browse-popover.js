import React, { useState } from "react";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import Link from "next/link";

const BrowsePopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Link passHref href="/search/anime">
          <Button variant="primaryGhost" onMouseOver={() => setIsOpen(true)}>
            Browse
          </Button>
        </Link>
      </PopoverTrigger>
      <PopoverContent
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Are you sure you want to continue with your action?
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default BrowsePopover;
