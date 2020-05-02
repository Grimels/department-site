import { abstractFetch, POST, GET } from 'dataServices/AbstractFetch';

export interface IImagesDataService {
    getImage: (id: string) => Promise<any>;
}

const ImagesDataService: () => IImagesDataService = () => {
    const API_IMAGES = '/images';

    const getImage = async (id: string) => {
        return await abstractFetch(GET, `${API_IMAGES}/${id}`) as Promise<any>;
    };

    return {
        getImage,
    };
};

const imagesDataService = ImagesDataService();
export { imagesDataService };