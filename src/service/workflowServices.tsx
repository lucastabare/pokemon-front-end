import { AxiosInstance } from "axios";

const WorkflowServices = (instance: AxiosInstance) => {
    const getAllPokemon = () => instance.get(`/pokemon`);

    const postCreate = (body: any) => instance.post(`/pokemon/create`, body)

    const postBatalla = (id_pokemon1: string, id_pokemon2: string) => instance.post(`/pokemon/batalla/${id_pokemon1}/${id_pokemon2}`)

    return {
        getAllPokemon,
        postCreate,
        postBatalla
    };
};
export default WorkflowServices;
