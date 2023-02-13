import { useState } from "react";
import { EnvelopeSimple, LockKey } from "phosphor-react";
import TextField from "@mui/material/TextField";
import ToEnter from "./section/ToEnter";
import Register from "./section/Register";

import { ReactComponent as ImgAnimate } from "../../assets/images/img-animate.svg";

import "./Login.scss";

const initialForm = {
  email: "",
  nome: "",
  telefone: "",
  senha: ""
};

export default function Login() {
  const dataMock = [
    {
      title: "Login",
      id: 0,
    },
    {
      title: "Cadastrar",
      id: 1,
    },
  ];

  const [buttonsTopForm, setButtonsTopForm] = useState<any>(0);
  const [error, setError] = useState<any>("");
  const [form, setForm] = useState<any>(initialForm);

  function handleFormChange(name: string, value: any) {
    setError(false);
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="w-full h-full flex-1 flex items-center justify-center bg-gradient-to-r from-[#FFC100] to-[#6440FF]">
      <div className="container bg-[#000] rounded-xl">
        <div className="sm:flex items-center">
          <div className="w-full sm:w-1/2">
            <ImgAnimate />
          </div>
          <div
            className={`w-full mb-10 sm:mt-0 sm:w-1/2 relative bg-[#FFC100] h-[420px] justify-center flex rounded-3xl`}
          >
            <div className=" relative w-full h-full">
              <div className="flex py-5 gap-4 px-3 justify-center">
                {dataMock?.map((item: any, index: any) => {
                  return (
                    <div
                      onClick={() => setButtonsTopForm(item?.id)}
                      key={index}
                      className={`px-4 z-50 bg-[#F4F4F6] duration-300 rounded-3xl ease-in-out cursor-pointer ${
                        buttonsTopForm === item?.id ? "bg-[#6440FF]" : ""
                      }`}
                    >
                      <button type="button" className="py-3 px-3">
                        {item?.title}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div
                className={`absolute flex justify-center items-center duration-300 overflow-hidden bottom-0 w-full h-full ${
                  buttonsTopForm === 1 ? "active-2" : "left-0"
                }`}
              >
                <div className={`form signinForm pt-5`}></div>

                <div className="form signupForm">
                  <Register />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
