"use client"

import { createListCollection } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select"

const SelectCurrency = () => {
  return (
    <SelectRoot
      collection={frameworks}
      justifyContent="center"
      mb="8px"
      width="80px"
      defaultValue={frameworks.items[0].value} >
      <SelectTrigger>
        <SelectValueText placeholder="USD" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.items.map((movie) => (
          <SelectItem item={movie} key={movie.value}>
            {movie.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "USD", value: "USD" },
    { label: "RU", value: "RU" },
  ],
})

export default SelectCurrency