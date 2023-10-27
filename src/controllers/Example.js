import Response from "../utils/Response.js";
import ExampleModel from "../models/example.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

//register esnasında kullanılacak JWT token
const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;

export const example = async (req, res) => {

    return Response.success(res, {message: "Example"})
}


export const findExample = async (_) => {

    const dataList = ExampleModel.findAll()
    return dataList

}

export const register = async (_, params) => {
    const { name, email, password } = params;

    // Şifreyi hash'le
    const hashedPassword = await bcrypt.hash(password, 10);

    // Veritabanına hash'lenmiş şifre ile kayıt yap
    const create = await ExampleModel.create({
        name,
        email,
        password: hashedPassword,
    });

    if (!create) throw new Error('Hata!');

    // Kullanıcıya bir JWT (token) üret
    const token = jwt.sign({ userId: create.id }, JWT_SECRET, { expiresIn: '1h' }); // Token 1 saat geçerli olacaktır

    return {
        message: 'Kayıt işlemi başarılı',
        data: create,
        token,
    };
};


export const login = async (_, params) => {
    const { email, password } = params;


    const user = await ExampleModel.findOne({ where: { email } });

    if (!user) {
        throw new Error('Kullanıcı bulunamadı');
    }

    // Kullanıcının veritabanındaki hash'lenmiş şifresi
    const hashedPassword = user.password;

    // Kullanıcının girdiği şifreyi hashleyip, veritabanındaki hash ile karşılaştırma
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
        throw new Error('Şifre doğrulama hatası');
    }

    // Şifre doğru ise kullanıcıya bir JWT (token) üret
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    return {
        message: 'Giriş işlemi başarılı',
        token,
    };
};