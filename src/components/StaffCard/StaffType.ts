export interface LinkId {
    id: string,
    link?: string,
}

export interface Contacts {
    orcidId?: string,
    'Scopus Author ID'?: LinkId[],
    googleAcademy?: string,
    ResearcherID?: LinkId,
}

export interface Staff {
    name: string,
    image: string,
    information: string[],
    contacts?: Contacts,
    disciplines?: string[]
}