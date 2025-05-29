
import {IncomingMessage, ServerResponse} from 'http';

import {serviceListEpisodes} from '../services/list-episodes-services';
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

const defaultContent = {"Content-Type": ContentType.JSON};


// Buscando a lista
export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse ) => {

    const content: PodcastTransferModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, defaultContent);

    response.write(JSON.stringify(content.body));

    response.end();
}

//Filtrando.
export const getFilterEpisodes = async(request: IncomingMessage, response: ServerResponse) =>{

    const content: PodcastTransferModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body));
    
    response.end();
}

