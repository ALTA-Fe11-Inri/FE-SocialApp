import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm, FormProvider } from "react-hook-form";

import Swal from "../../utils/Swal";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";

function Register() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [Name, setName] = useState<string>("");
  const [phoneNumber, setphoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (email && password && Name && phoneNumber) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, Name, phoneNumber, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
      _name: Name,
      last_name: phoneNumber,
    };
    axios
      .post("register", body)
      .then((res) => {
        const { message, data } = res.data;
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        if (data) {
          navigate("/login");
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="bg-black w-full h-full flex flex-col items-center justify-center">
        <form
          className="flex flex-col gap-4 min-w-[40%]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            id="inputName"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="inputEmail"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="inputPhoneNumber"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <Input
            id="inputPassword"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            id="btn-register"
            label="register"
            loading={loading || disabled}
          />
        </form>
        <Button id="btn-register" label="Login" loading={loading || disabled} />
      </div>
    </Layout>
  );
}

export default Register;
