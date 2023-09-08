export function removePrefixFromKeys(obj: any) {
    const renamedObj: any = {};

    for (const key in obj) {
        if (key.startsWith('_')) {
            const newKey = key.substr(1);
            renamedObj[newKey] = obj[key];
        } 
        else {
            renamedObj[key] = obj[key];
        }
    }

    return renamedObj;
}