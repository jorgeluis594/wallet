const API_URL = "http://localhost:3000/"

export async function request(endPoint, body){
    let headers = {"content-type": "application/json"};
    if(body?.headers) headers = {...headers, ...body.headers}
    return fetch(API_URL+endPoint,{
        ...body,
        headers 
    });
}

export function transformDataCamelCase(data){
    const dataCamel = {};
    for (const prop in data){
        dataCamel[snakeToCamel(prop)] = data[prop];
    }
    return dataCamel;
}

export function transformDataSnakeCase(data){
    const dataSnake = {};
    for (const prop in data) {
        dataSnake[camelToSnake(prop)] = data[prop];
    }
    return dataSnake;   
}

function camelToSnake(string){
    return string.replace(
        /[A-Z]/g,
        letter => "_" + letter.toLowerCase()
    );
}

function snakeToCamel(string){
    return string.replace(
        /([-_][a-z])/g,
        (group) => group.toUpperCase()
                        .replace('-', '')
                        .replace('_', '')
    )
}
