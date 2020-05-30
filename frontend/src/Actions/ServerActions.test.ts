import { requestItem, requestList, requestEndereco } from "./ServerActions"


test("test requestItem() response", async () => {
    const data = await requestItem("5ed1d38b665be32180e11f48");
    expect(data).toBeDefined();
});

test("test requestList() response", async () => {
    const data = await requestList();
    expect(data).toBeDefined();
});

test("test if CEP API is working", async () => {
    const data = await requestEndereco(26256140); 
    expect(data).toBeDefined();
    expect(data).toHaveProperty("cep");
});