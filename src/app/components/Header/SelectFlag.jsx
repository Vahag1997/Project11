"use client";

import English from '/src/app/icons/usa.png';
import Russian from '/src/app/icons/russia.png';
import Armenian from '/src/app/icons/armenia.png';
import Image from 'next/image';
import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '../ui/select';

const SelectFlag = () => {
  return (
    <SelectRoot
      collection={frameworks}
      justifyContent="center"
      mb="8px"
      width="70px"
      defaultValue={frameworks.items[0].value}
    >
      <SelectTrigger>
        <SelectValueText>
          {(selectedItems) => {
            if (selectedItems.length > 0) {
              const selected = frameworks.items.find(
                (item) => item.value === selectedItems[0].value
              );
              return (
                <Image
                  src={selected.icon}
                  alt="language"
                  width={20}
                  height={12}
                />
              );
            }
            return null;
          }}
        </SelectValueText>
      </SelectTrigger>
      <SelectContent>
        {frameworks.items.map((item) => (
          <SelectItem item={item} key={item.value}>
            <Image src={item.icon} alt="language" width={20} height={12} />
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

const frameworks = createListCollection({
  items: [
    { label: "ENG", value: "ENG", icon: English },
    { label: "RU", value: "RU", icon: Russian },
    { label: "AM", value: "AM", icon: Armenian },
  ],
});

export default SelectFlag;
