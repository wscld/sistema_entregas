import Endereco from "../Types/Endereco";

export const enderecoToString = (endereco: Endereco) => {
    if (endereco) return endereco.rua + ", " + endereco.numero + ", " + endereco.bairro + ", " + endereco.cidade + ", " + endereco.estado;
    else return undefined;
}

export const formatTime = (timeCreated: number) => {
    var diff = Math.floor((Date.now() - timeCreated) / 1000);
    var interval: number = Math.floor(diff / 31536000);

    if (interval >= 1) {
        return interval + " anos";
    }
    interval = Math.floor(diff / 2592000);
    if (interval >= 1) {
        return interval + " meses";
    }
    interval = Math.floor(diff / 604800);
    if (interval >= 1) {
        return interval + " semanas";
    }
    interval = Math.floor(diff / 86400);
    if (interval >= 1) {
        return interval + "d";
    }
    interval = Math.floor(diff / 3600);
    if (interval >= 1) {
        return interval + "h";
    }
    interval = Math.floor(diff / 60);
    if (interval >= 1) {
        return interval + " m";
    }
    return "menos de 1 minuto";
}



export default { enderecoToString, formatTime };