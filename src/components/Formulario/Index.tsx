import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import axios from 'axios';
import { enviarEmail } from "../../api/api";

interface Estado {
  id: number;
  sigla: string;
  nome: string;
}

interface Cidade {
  id: number;
  nome: string;
}

const EstadosDinamicos = () => {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [selectedEstado, setSelectedEstado] = useState<string>('');

  useEffect(() => {
    const obterEstados = async () => {
      try {
        const response = await axios.get<Estado[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        setEstados(response.data);
      } catch (error) {
        console.error('Erro ao obter estados', error);
      }
    };

    obterEstados();
  }, []);

  useEffect(() => {
    const obterCidades = async () => {
      try {
        if (selectedEstado) {
          const response = await axios.get<Cidade[]>(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado}/municipios`
          );
          setCidades(response.data);
        } else {
          setCidades([]);
        }
      } catch (error) {
        console.error('Erro ao obter cidades', error);
      }
    };

    obterCidades();
  }, [selectedEstado]);

  const handleEstadoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedEstado(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <select
        name="estado"
        value={selectedEstado}
        onChange={handleEstadoChange}
        id="estado"
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      >
        <option value="">Selecione um estado</option>
        {estados.map((estado) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>

      <select
        name="cidade"
        value={selectedEstado}
        onChange={() => {}}
        id="cidade"
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      >
        <option value="">Selecione uma cidade</option>
        {cidades.map((cidade) => (
          <option key={cidade.id}>{cidade.nome}</option>
        ))}
      </select>
    </div>
  );
};

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  estado: string;
  cidade: string;
  emailMarketing: boolean;
}

export const Formulario = () => {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    emailMarketing: false,
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.estado === 'Estado') {
      alert('Por favor, selecione um estado válido antes de enviar o formulário.');
      return;
    }

    try {
      setIsSending(true)
      await enviarEmail(formData);
      console.log("Dados", formData)
    } catch (error) {
      console.error("Something is wrong", error);
    } finally{
      setIsSending(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-auto flex flex-col">
      
      <input
        placeholder="Nome"
        type="text"
        id="nome"
        name="nome"
        onChange={handleChange}
        value={formData.nome}
        required
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      
      <input
        placeholder="Email"
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      <input
        placeholder="Telefone"
        type="text"
        id="telefone"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        required
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      <EstadosDinamicos />

      <div className="flex gap-3 mb-5 w-[100%] ">
        <input className="w-4" type="checkbox"  required name="termos politica de privacidade" id="privacidade" />
        <label htmlFor="privacidade">Aceito a <a className="text-blue-600 underline" href="https://olharcerto.com.br/politica-de-privacidade/" target="_blank">política de privacidade</a>.</label>
      </div>
      
    

      <button
        type="submit"
        id="styleButton"
        className="max-w-[600px] bg-purple-700"
        disabled={isSending}
      >
        Eu quero me credenciar
      </button>
      
    </form>
  );
};
