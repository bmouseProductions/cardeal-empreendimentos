import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import axios from 'axios';
import { enviarEmail } from "../../api/api";
import { Link } from "react-router-dom";

interface Estado {
  id: number;
  sigla: string;
  nome: string;
}

interface Cidade {
  id: number;
  nome: string;
}

interface FormData {
  assunto: "Contato via site" | "Gostaria de me tornar um parceiro";
  nome: string;
  telefone: string;
  email: string;
  estado: string;
  cidade: string;
  descricao: string;
  politica: boolean;
}

interface PropsFormulario {
  placeTextArea: string;
  assunto: "Contato via site" | "Gostaria de me tornar um parceiro";
}

export default function Formulario({ placeTextArea, assunto }: PropsFormulario) {

  const [formData, setFormData] = useState<FormData>({
    assunto: assunto,
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    descricao: "",
    politica: false,
  });

  const [isSending, setIsSending] = useState(false);
  const [estados, setEstados] = useState<Estado[]>([]);
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [selectedEstado, setSelectedEstado] = useState<{ sigla: string; nome: string } | null>(null);

  // BUSCA A LISTA DE ESTADOS
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

  // BUSCA A LISTA DE CIDADES DO ESTADO SELECIONADO
  useEffect(() => {
    const obterCidades = async () => {
      try {
        if (selectedEstado) {
          const response = await axios.get<Cidade[]>(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado.sigla}/municipios`
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

  //VERIFICA A MUDANÇA NOS INPUTS DE TEXTOS
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  //VERIFICA A MUDANÇA NO INPUT SELECT DE ESTADO
  const handleEstadoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = estados.find(estado => estado.sigla === e.target.value);
    if (selectedOption) {
      setSelectedEstado({ sigla: selectedOption.sigla, nome: selectedOption.nome });
      setFormData((prevData) => ({
        ...prevData,
        estado: selectedOption.nome,
      }));
    }
  };

  //VERIFICA A MUDANÇA NO INPUT SELECT DE CIDADE
  const handleCidadeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      cidade: e.target.value,
    }));
  };

  //VERIFICA A NO INPUT DE TEXT AREA
  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  //FAZ O ENVIO DO FORMULÁRIO PARA A API
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.estado || formData.estado === 'Selecione um estado') {
      window.alert('Por favor, selecione um estado válido antes de enviar o formulário.');
      return;
    }

    if (!formData.politica) {
      alert('Para solicitar email é necessário concordar com nossa política de privacidade');
      return;
    }

    try {
      setIsSending(true);
      await enviarEmail(formData);
      console.log("Dados", formData);
    } catch (error) {
      console.error("Something is wrong", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-auto flex flex-col mx-auto">
      <input
        placeholder="Nome"
        type="text"
        id="nome"
        name="nome"
        onChange={handleChange}
        value={formData.nome}
        required
        className="mb-5 w-[100%] h-[50px] max-w-[500px] bg-gray-200 rounded text-black px-2"
      />

      <input
        placeholder="Email"
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mb-5 w-[100%] h-[50px] max-w-[500px] bg-gray-200 rounded text-black px-2"
      />

      <input
        placeholder="Telefone"
        type="text"
        id="telefone"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        required
        className="mb-5 w-[100%] h-[50px] max-w-[500px] bg-gray-200 rounded text-black px-2"
      />

      <div className="flex flex-col">
        <select
          name="estado"
          value={selectedEstado?.sigla || ''}
          onChange={handleEstadoChange}
          id="estado"
          required
          className="mb-5 w-[100%] h-[50px] max-w-[500px] bg-gray-200 rounded text-black px-2"
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
          value={formData.cidade}
          onChange={handleCidadeChange}
          id="cidade"
          required
          className="mb-5 w-[100%] h-[50px] max-w-[500px] bg-gray-200 rounded text-black px-2"
        >
          <option value="">Selecione uma cidade</option>
          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.nome}>{cidade.nome}</option>
          ))}
        </select>
      </div>

      <textarea
        placeholder={placeTextArea}
        rows={5}
        id="descricao"
        name="descricao"
        value={formData.descricao}
        onChange={handleChangeText}
        required
        className="mb-5 w-[100%] max-w-[500px] bg-gray-200 rounded text-black px-2"
      />

      <div className="flex gap-3 mb-5 w-[100%]">
        <input
          onChange={handleChange}
          className="w-4"
          type="checkbox"
          required
          name="termos politica de privacidade"
          id="politica"
        />
        <label htmlFor="politica">Aceito a <Link  className="text-blue-600 underline" to='/privacidade' target="_blank">política de privacidade</Link >.</label>
      </div>

      <button
        type="submit"
        id="styleButton"
        className="py-3 max-w-[500px] text-white font-semibold bg-[#193592] rounded"
        disabled={isSending}
      >
        Eu quero me credenciar
      </button>
    </form>
  );
}
