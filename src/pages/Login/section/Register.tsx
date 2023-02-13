import TextField from "@mui/material/TextField";
import { useState } from "react";

import "../Login.scss";

const initialForm = {
  username:"",
	email:"",
	password:"",
	telefone: ""
};

export default function Register() {
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
    <div>
      <form action="">
        <div className="mb-7">
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            placeholder="Digite seu nome"
            className="py-3 px-2 rounded-md text-lg w-full bg-[#FFC100] boxShadow"
            onChange={(e) => handleFormChange("username", e.target.value)}
            value={form.username}
            InputProps={{
              className: `${!error ? "inputStyle" : "inputStyleError"}`,
            }}
            InputLabelProps={{
              className: `${!error ? "!text-[#1a1a1a]" : "!text-[#ff0000]"}`,
            }}
          />
        </div>

        <div className="mb-7">
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            placeholder="Digite seu e-mail"
            className="py-3 px-2 rounded-md text-lg w-full bg-[#FFC100] boxShadow"
            onChange={(e) => handleFormChange("email", e.target.value)}
            value={form.email}
            InputProps={{
              className: `${!error ? "inputStyle" : "inputStyleError"}`,
            }}
            InputLabelProps={{
              className: `${!error ? "!text-[#1a1a1a]" : "!text-[#ff0000]"}`,
            }}
          />
        </div>

        <div className="mb-7">
          <TextField
            id="outlined-basic"
            label="Telefone"
            variant="outlined"
            placeholder="Digite seu telefone"
            className="py-3 px-2 rounded-md text-lg w-full bg-[#FFC100] boxShadow"
            onChange={(e) => handleFormChange("telefone", e.target.value)}
            value={form.telefone}
            InputProps={{
              className: `${!error ? "inputStyle" : "inputStyleError"}`,
            }}
            InputLabelProps={{
              className: `${!error ? "!text-[#1a1a1a]" : "!text-[#ff0000]"}`,
            }}
          />
        </div>

        <div className="">
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            placeholder="Digite sua senha"
            className="py-3 px-2 rounded-md text-lg w-full bg-[#FFC100] boxShadow"
            onChange={(e) => handleFormChange("password", e.target.value)}
            value={form.password}
            InputProps={{
              className: `${!error ? "inputStyle" : "inputStyleError"}`,
            }}
            InputLabelProps={{
              className: `${!error ? "!text-[#1a1a1a]" : "!text-[#ff0000]"}`,
            }}
          />
        </div>
      </form>
    </div>
  );
}
