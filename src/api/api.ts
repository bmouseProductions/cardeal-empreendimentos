import axios from "axios"

export const api = axios.create({
    baseURL: "https://backend-olhar-certo.onrender.com"
})

interface propsFormData {
    nome: string;
    telefone: string;
    email: string;
    estado: string;
    cidade: string;
    descricao:string;
    politica: boolean; 
}



export const enviarEmail = async (formData: propsFormData) => {
    const {nome, telefone, email, estado, cidade, descricao, politica} = formData;

    const dataToSend = {
        nome,
        telefone,
        email,
        estado,
        cidade,
        descricao,
        politica
    }
    try{
        const response = await api.post("/send", dataToSend)
        return response.data
    } catch (error) {
        throw new Error("Erro" + error)
    }

}
