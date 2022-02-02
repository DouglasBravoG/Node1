let host		='bv754j6eaguzjzp-mongodb.services.clever-cloud.com'
let db          ='bv754j6eaguzjzp'
let user		='uyf8iq8zrtmyqrnwynol'
let port        =27017
let password    ='NPnXBOBYqsV53oHUhZrM'


const database = `mongodb://${user}:${password}@${host}:${port}/${db}`;

export {database};