export const cutToFirstOccurrence = (string, mark) => {
    let idlePosition = string.indexOf(mark);

    if(idlePosition > 0)
        return string.substring(0, idlePosition);
    else
        return string;
};