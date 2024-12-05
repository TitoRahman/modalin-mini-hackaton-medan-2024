import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React from "react";
import { InputPhoneIcon } from "../components/InputPhoneIcon";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [warning, setWarning] = React.useState(false);
  const navigate = useNavigate();
  function handlePhoneSubmit() {
    if (phoneNumber.length == 13 || phoneNumber.length == 14) {
      navigate("/login/otp");
    } else {
      setWarning(true);
    }
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
          <InputPhoneIcon
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />

          <Button className="w-1/2" onClick={handlePhoneSubmit}>
            Lanjut
          </Button>
        </div>
        <span className={`text-gray-600 ${warning ? "block" : "hidden"}`}>
          Nomor telepon tidak valid 😔
        </span>
      </Card>
    </div>
  );
}
