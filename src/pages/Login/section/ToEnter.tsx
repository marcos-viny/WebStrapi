import TextField from "@mui/material/TextField";
import { useState } from "react";

const initialForm = {
  email: "",
  nome: "",
  telefone: "",
  senha: "",
};

export default function ToEnter() {
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
            label={`${!error ? "E-mail" : "Email inválido"}`}
            variant="outlined"
            placeholder="Digite seu e-mail"
            className="py-3 px-2 rounded-md text-lg w-full bg-[#54dcfc]"
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
            label="Nome"
            variant="outlined"
            placeholder="Digite seu nome"
            className="py-3 px-2 rounded-md text-lg w-full bg-[#54dcfc]"
            onChange={(e) => handleFormChange("nome", e.target.value)}
            value={form.nome}
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
            placeholder="Seu telefone"
            className="py-3 px-2 rounded-md text-lg w-full bg-[#54dcfc]"
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
            className="py-3 px-2 rounded-md text-lg w-full bg-[#54dcfc]"
            onChange={(e) => handleFormChange("senha", e.target.value)}
            value={form.senha}
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
