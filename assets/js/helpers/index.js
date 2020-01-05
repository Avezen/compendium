export const cutToFirstOccurrence = (string, mark) => {
    let idlePosition = string.indexOf(mark);

    if(idlePosition > 0)
        return string.substring(0, idlePosition);
    else
        return string;
};

export const isObjectEmpty = (obj) => {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
};