const regexp = /src\s*=\s*\\*"(.+?)\\*"\s*/g;

export const extractImgSrc = (string: string) => {
    const test = regexp.exec(string);
    return test ? test[1] : undefined;
}