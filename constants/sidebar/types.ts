export interface IMenu {
    title?: string,
    icon?: string,
    path?: string,
    key?: string,
    isBeta?: boolean,
    child?: IChild[];
}

export interface IChild {
    title?: string,
    path?: string,
    key?: string,
    isBeta?: boolean
}