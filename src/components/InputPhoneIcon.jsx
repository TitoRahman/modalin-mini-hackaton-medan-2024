import React from "react";
import { PiPhone } from "react-icons/pi";

export function InputPhoneIcon({ phoneNumber, setPhoneNumber }) {
  const handlePhoneChange = (e) => {
    // Remove all non-digit characters
    const cleanedValue = e.target.value.replace(/\D/g, "");

    // Limit to 13 digits
    const limitedValue = cleanedValue.slice(0, 12);

    // Format the number with dashes
    let formattedValue = "";
    for (let i = 0; i < limitedValue.length; i++) {
      if (i === 4 || i === 8) {
        formattedValue += "-";
      }
      formattedValue += limitedValue[i];
    }

    setPhoneNumber(formattedValue);
  };

  return (
    <div className="relative w-full">
      <span className="text-sm text-gray-500">Nomor Telepon</span>

      <input
        type="tel"
        id="UserTelephone"
        placeholder="0812-000-0000"
        className="w-full rounded-md border-gray-200 pe-10 shadow-sm sm:text-sm"
        value={phoneNumber}
        onChange={handlePhoneChange}
        pattern="\d*"
        inputMode="numeric"
      />

      <span className="pointer-events-none absolute inset-y-11 end-0 grid w-10 place-content-center text-gray-500">
        <PiPhone size={25} />
      </span>
    </div>
  );
}
