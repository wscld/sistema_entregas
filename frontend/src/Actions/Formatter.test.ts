import { formatTime, enderecoToString } from "./Formatter";
import Endereco from "../Models/Endereco";


test("test formatTime() with current time", () => {
    let currentMillis: number = new Date().getTime();
    expect(formatTime(currentMillis)).toBe("menos de 1 minuto");
});

test("test enderecoToString() with correct formating", () => {
    let endereco: Endereco = {
        cep:0,numero:1,rua:"a",bairro:"b",cidade:"c",estado:"d"
    }
    expect(enderecoToString(endereco)).toBe("a, 1, b, c, d");
});