import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Otp() {
  const [otp, setOtp] = React.useState("");
  const [warning, setWarning] = React.useState(false);

  const navigate = useNavigate();
  function handleOtpSubmit() {
    if (otp.length == 6) {
      console.log("OTP is valid!");
      navigate("/");
    } else {
      setWarning(true);
    }
  }

  function handleOtpChange(e) {
    const cleanedValue = e.target.value.replace(/\D/g, "");
    const limitedValue = cleanedValue.slice(0, 6);
    setOtp(limitedValue);
  }
  return (
    <div className="flex w-screen h-screen justify-center items-center text-center bg-gray-100">
      <Card className="p-10 flex flex-col items-center gap-8 justify-between">
        <div className="">
          <Typography variant="h3">MODALIN</Typography>
          <Typography variant="small">
            - Your Chance To Support Local Businesses -
          </Typography>
        </div>
        <div className="flex flex-col gap-4 items-center h-fit">
          <span className="text-md text-gray-500">OTP</span>

          <input
            className="w-full rounded-md border-gray-200 shadow-sm text-center text-xl"
            type="text"
            value={otp}
            onChange={handleOtpChange}
            placeholder="X X X X X X"
            maxLength={6}
          />
          <Button onClick={handleOtpSubmit}>Verifikasi</Button>
        </div>
        <span className={`text-gray-600 ${warning ? "block" : "hidden"}`}>
          Kode OTP tidak valid 😔
        </span>
      </Card>
    </div>
  );
}
