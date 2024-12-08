import React from "react";
import InputSearch from "../components/InputSearch";
import CompanyCard from "../components/CompanyCard";
import generateDummyCompanies from "../helper/dummyData";
import { Button, Checkbox, Slider, Typography } from "@material-tailwind/react";
import Divider from "../components/Divider";
import IntToRupiah from "../helper/IntToRupiah";
import RupiahToInt from "../helper/RupiahToInt";

export default function Browse() {
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [companies, setCompanies] = React.useState([]);
  const [filteredCompanies, setFilteredCompanies] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(100000);
  React.useEffect(() => {
    setFilters([
      { id: 1, name: "Teknologi", checked: false },
      { id: 2, name: "Barang Mentah", checked: false },
      { id: 3, name: "Pakaian", checked: false },
      { id: 4, name: "F&B", checked: false },
    ]);
    setCompanies(generateDummyCompanies());
  }, []);

  function handleSearch() {}
  function handleCheckedFilter(id) {
    const newFilters = filters.map((filter) => {
      if (filter.id === id) {
        return { ...filter, checked: !filter.checked };
      }
      return filter;
    });
    setFilters(newFilters);
  }

  function handleMinPrice(e) {
    setMinPrice(e.target.value);
  }
  function handleMaxPrice(e) {
    setMaxPrice(e.target.value);
  }
  return (
    <div className="w-full px-48 py-8 flex flex-col items-center">
      <div className="mt-8 w-full flex gap-8">
        <div className="w-96 flex flex-col gap-4">
          <InputSearch
            searchHandler={handleSearch}
            width={"full"}
            search={search}
            setSearch={setSearch}
          />
          <hr />
          <Divider label="Industri" />
          <div className="text-black flex flex-col">
            {filters.map((filter) => (
              <Checkbox
                key={filter.id}
                checked={filter.checked}
                onChange={() => handleCheckedFilter(filter.id)}
                label={filter.name}
                ripple={false}
              />
            ))}
          </div>
          <Divider label="Harga" />
          <div className="flex gap-4 items-center">
            <input
              type="number"
              min={0}
              max={maxPrice}
              onChange={handleMinPrice}
              placeholder="Min"
              className="w-full rounded-md border-gray-200 p-2 shadow-sm sm:text-sm"
            />
            -
            <input
              type="number"
              min={minPrice + 1}
              onChange={handleMaxPrice}
              placeholder="max"
              className="w-full rounded-md border-gray-200 p-2 shadow-sm sm:text-sm"
            />
          </div>
          <Button>Filter</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}
