import { abstractFetch, POST, GET } from 'dataServices/AbstractFetch';

export interface ISupportDataService {
    send: (formData: { name: string, surName: string, email: string, question: string }) => Promise<any>;
}

const SupportDataService: () => ISupportDataService = () => {
    const API_SUPPORT = '/support';

    const send = async ({ name, surName, email, question }: { name: string, surName: string, email: string, question: string }) => {
        return await abstractFetch(POST, `${API_SUPPORT}/send`, {
            firstName: name,
            lastName: surName,
            email,
            question
        }) as Promise<any>;
    };

    return {
        send,
    };
};

const supportDataService = SupportDataService();
export { supportDataService };