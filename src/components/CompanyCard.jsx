import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import { CiMoneyBill } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import IntToRupiah from "../helper/IntToRupiah";
import { useNavigate } from "react-router-dom";

export default function CompanyCard({ company }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/company/${company.id}`);
  };
  return (
    <Card
      className="hover:shadow-lg hover:cursor-pointer hover:scale-105"
      onClick={handleNavigate}
    >
      <div className="flex flex-col items-center justify-between w-72 h-fit">
        <img
          src={company.logo}
          alt={company.name}
          className="w-36 rounded-full my-4"
        />
        <div className="flex flex-col items-start w-full px-4 pb-4">
          <Typography variant="h4">{company.name}</Typography>
          <div className="text-md text-gray-500 flex gap-2 items-center">
            <CiMoneyBill size={24} /> Rp.{IntToRupiah(company.price)}
          </div>
          <div className="text-md text-gray-500 flex gap-2 items-center">
            <GiReceiveMoney size={24} /> {Math.floor(company.dividend * 100)}
            %/Tahun
          </div>
          <div className="text-md text-gray-500 flex gap-2 items-center">
            <LiaIndustrySolid size={24} /> {company.industry}
          </div>
          <div className="text-md text-gray-500 flex gap-2 items-center">
            <IoLocation size={24} /> {company.location}
          </div>
        </div>
      </div>
    </Card>
  );
}
