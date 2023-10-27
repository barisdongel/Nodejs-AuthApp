import User from "./user.model.js";


const models = [
    User
];


// Senkronizasyon işlemini gerçekleştirme
export const syncModels = async () => {
    try {
        for (const model of models) {
            await model.sync();
        }
        console.log('Tablolar başarıyla senkronize edildi.');
    } catch (error) {
        console.error('Hata:', error);
    }
};

export default models;
