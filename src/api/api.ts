import axios from "axios"

export const api = axios.create({
    baseURL: "https://backend-sitecardeal.onrender.com"
})

interface propsFormData {
    assunto: string;
    nome: string;
    email: string;
    telefone: string;
    estado: string;
    cidade: string;
    descricao:string;
    politica: boolean; 
}

export const enviarEmail = async (formData: propsFormData) => {
    const {assunto, nome, email, telefone, estado, cidade, descricao, politica} = formData;

    const dataToSend = {
        assunto,
        nome,
        email,
        telefone,
        estado,
        cidade,
        descricao,
        politica
    }
    try{
        const response = await api.post("/send-email", dataToSend)
        if (response.status === 200) {
            window.alert("Email enviado com sucesso!");
        } else {
            window.alert("Falha ao enviar o email. Por favor, tente novamente.");
        }
        return response.data
    } catch (error) {
        throw new Error("Erro" + error)
    }

}
