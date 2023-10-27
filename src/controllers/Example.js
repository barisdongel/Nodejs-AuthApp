import Response from "../utils/Response.js";
import ExampleModel from "../models/example.model.js";


export const example = async (req, res) => {

    return Response.success(res, {message: "Example"})
}


export const findExample = async (_) => {

    const dataList = ExampleModel.findAll()
    return dataList

}

export const register = async(_,params) => {
    const{
        name,
        email,
        password
    } = params

    const create = await ExampleModel.create({
        name,
        email,
        password
    })

    if (!create) throw new Error('Hata !')

    return {
        message: 'Kayıt işlemi başarılı',
        data: create
    }
}

export const login = async (_, params) => {
    const { email, password } = params;

    const user = await ExampleModel.findOne({ where: { email } });

    if (!user) {
        throw new Error('Kullanıcı bulunamadı');
    }

    const isPasswordValid = user.password === password;

    if (!isPasswordValid) {
        throw new Error('Şifre doğrulama hatası');
    }

    return {
        message: 'Giriş işlemi başarılı'
    };
}
