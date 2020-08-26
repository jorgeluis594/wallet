import {transformDataSnakeCase, transformDataCamelCase, request } from './transformData'


export async function loginUser(emailUser, password){
    const response = await request("login", {
        method: 'POST',
        body: JSON.stringify(transformDataSnakeCase({email: emailUser, password}))
    } );

    const data = await response.json();
    if(response.status === 401) throw new Error("Provided credentials are invalid");
    if(!response.ok) throw new Error("Server error");
    const {id, firstName, lastName, phone, email} = transformDataCamelCase(data.user);
    return {id, firstName, lastName, phone, email, token: data.token};
}

export async function registerUser(userData){
    const response = await request("users", {
        method: 'POST',
        body: JSON.stringify(transformDataSnakeCase(userData))
    });

    const data = await response.json();
    if(!response.ok) throw new Error("Server error");
    const {id, firstName, lastName, phone, email} = transformDataCamelCase(data.user);
    return {id, firstName, lastName, phone, email, token: data.token};
}