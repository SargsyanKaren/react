 export const cloneDeep = obj => JSON.parse(JSON.stringify(obj));

 export const sortByProperty = (arr, prop) => arr.sort((a, b) => a[prop] - b[prop]);