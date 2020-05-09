import { SCIENTIFIC_ARTICLES, NEWS } from 'constants/articles';
import { IArticle } from 'components/ScientificActivity/Article';
import { abstractFetch, POST, DELETE, PATCH, GET } from 'dataServices/AbstractFetch';
import { Language } from 'constants/language';

export interface IPostsDataService {
    getArticles: () => Promise<IArticle[]>,
    createArticle: (article: ICreateArticleRequest) => Promise<IArticle[]>,
    deleteArticle: (articleId: string) => Promise<IArticle>,
    updateArticle: (article: IArticle) => Promise<IArticle>,
    getNews: () => Promise<IArticle[]>,
    getNewsItem: (id: string) => Promise<IArticle>,
}

export interface ICreateArticleRequest {
    subject: string,
    text: string,
    type_id: number,
    language?: Language,
    imageIds?: string[]
}

const PostsDataService: () => IPostsDataService = () => {
    const API_POSTS = '/posts';

    const getArticles = async () => {
        return await abstractFetch(GET, `${API_POSTS}?type=${SCIENTIFIC_ARTICLES}`) as Promise<IArticle[]>;
    };

    const createArticle = async (article: ICreateArticleRequest) => {
        return await abstractFetch(POST, API_POSTS, article) as Promise<IArticle[]>;
    };

    const deleteArticle = async (articleId: string) => {
        return await abstractFetch(DELETE, `${API_POSTS}/${articleId}`) as Promise<IArticle>;
    };

    const updateArticle = async (article: IArticle) => {
        const updateArticleRequest: IArticle = {
            type_id: article.type_id,
            subject: article.subject,
            text: article.text,
            imageIds: article.imageIds,
            language: article.language,
            id: article.id,
        };
        return await abstractFetch(PATCH, `${API_POSTS}`, updateArticleRequest, { 'content-type': 'application/json'}) as Promise<IArticle>;
    };

    const getNews = async () => {
        return await abstractFetch(GET, `${API_POSTS}?type=${NEWS}`) as Promise<IArticle[]>;
    };

    const getNewsItem = async (id: string) => {
        return await abstractFetch(GET, `${API_POSTS}/${id}`) as Promise<IArticle>;
    };

    return {
        getArticles,
        getNews,
        createArticle,
        deleteArticle,
        updateArticle,
        getNewsItem,
    };
};

const postsDataService = PostsDataService();
export { postsDataService };