import { transformDataCamelCase, transformDataSnakeCase, request } from "./transformData";
import compareDesc from "date-fns/compareDesc";

export async function listTransactions(user){
    const token = `Bearer ${user.token}`;
    const response = await request("transactions", {
        method: "GET",
        headers: {Authorization: token} 
    })
    const data = await response.json();
    if(!response.ok) throw new Error("Server error");
    return data.map(transaction => transformDataCamelCase(transaction))
                .sort((a,b)=>compareDesc(new Date(a.date), new Date(b.date)));
}

export async function addTransaction(user, values){
    const token = `Bearer ${user.token}`;
    const response = await request("transactions", {
        method: "POST",
        headers: {Authorization: token},
        body: JSON.stringify(transformDataSnakeCase(values))
    });
    const data = await response.json();
    if(response.status === 401) throw new Error("Must be logged");
    if(!response.ok) throw new Error("Server error");
    return transformDataCamelCase(data);
}

export async function getTransaction(user, id){
    const token = `Bearer ${user.token}`;
    const response = await request(`transactions/${id}`,{
        method: "GET",
        headers: {Authorization: token}
    })
    const data = await response.json();
    if(!response.ok) throw new Error(data.error);
    return transformDataCamelCase(data);
}

export async function updateTransaction(user, id, values){
    const token = `Bearer ${user.token}`;
    const response = await request(`transactions/${id}`,{
        method: "PATCH",
        headers: {Authorization: token},
        body: JSON.stringify(transformDataSnakeCase(values))
    });
    const data = await response.json()
    if(!response.ok) throw new Error(data.error)
    return transformDataCamelCase(data);
}

export async function destroyTransaction(user, id){
    const token = `Bearer ${user.token}`;
    const response = await request(`transactions/${id}`,{
        method: "DELETE",
        headers: {Authorization: token},
    });
    if(response.status !== 204) {
        const data = await response.json();
        throw new Error(data.error)
    }
    return true;
}
