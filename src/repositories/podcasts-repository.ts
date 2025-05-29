//! Import padrão para ler e escrever arquivos de sistema. (Padrão do node). -- File System
import fs from "fs";
//! import para ler diretorios. --Path
import path from "path";
import { PodcastModel } from "../models/podcast-model";

//! Passando o caminho do arquivo dinamicamente. Constante padrão do Node que me permite pegar o path dinamicamente. (__dirname)
const pathData = path.join(__dirname, "../repositories/podcasts.json");

//! Quando utilizo uma "?" no final do parametro quero declara-la como opcional.
export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const languange = "utf-8";

    const rawData = fs.readFileSync(pathData, languange);
    
    let jsonFile = JSON.parse(rawData);

    //! filtrando os dados
    if(podcastName) {
        //? Adicionando um filtro no json
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}