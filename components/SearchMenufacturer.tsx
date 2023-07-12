"use client";
import { ISearchManuFacturerProps } from "@/types";
import React, { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";

function SearchMenufacturer({
  manuFacturer,
  setManuFacturer,
}: ISearchManuFacturerProps) {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) => {
          return manufacturer.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className="">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={({ target: { value } }) => setQuery(value)}
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options>
            {filteredManufacturers.map((item) => (
              <Combobox.Option
                key={item}
                value={item}
                className={({ active }) =>
                  `relative search-manufacturer__option
                  ${active ? "bg-primary-blue text-white" : "text-gray-900"}
                  `
                }
              >
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}

export default SearchMenufacturer;
