export const cleanText  = (text) => {
    return text ? text.split(/[!@#$%^&*()_+\-=[\]{};':"\\|, .<>/?]/).join("-").toLowerCase() : 'Empty';
}

