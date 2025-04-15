"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import English from "/src/app/icons/usa.png";
import Russian from "/src/app/icons/russia.png";
import Armenian from "/src/app/icons/armenia.png";
import Image from "next/image";
import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select";

const frameworks = createListCollection({
  items: [
    { label: "en", value: "en", icon: English },
    { label: "ru", value: "ru", icon: Russian },
    { label: "hy", value: "hy", icon: Armenian },
  ],
});

const SelectFlag = () => {
  const [locale, setLocale] = useState("");
  const router = useRouter();


  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];
  
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale}; path=/`; 
      router.refresh();
    }
  }, [router]);
  
  const changeLocale = (newLocale) => {
    setLocale(newLocale.value[0]);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale.value[0]}; path=/`;
    router.refresh();
  };
  
  return (
    <SelectRoot
      collection={frameworks}
      justifyContent="center"
      mb="8px"
      width="70px"
      value={[locale]}
      onValueChange={(value) => changeLocale(value)}
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

export default SelectFlag;
