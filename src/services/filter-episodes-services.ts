import { IncomingMessage } from "http";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> =>{

    //! Definindo a interface de retorno.
    let responseFormat : PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //! Buscando os dados.
    //? split para reconhecer o valor da variavel.
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //! verificando se tem conteúdo.
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }


    responseFormat.body = data;

    return responseFormat;
}