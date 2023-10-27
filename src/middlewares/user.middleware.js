const loginMiddleware = async (req, res, next) => {
    const { email, password } = req.body;

    // E-posta ve şifre eksikse, hata döndür
    if (!email || !password) {
        return res.status(400).json({ error: 'E-posta ve şifre zorunludur.' });
    }

    // E-postanın geçerli bir e-posta adresi olup olmadığını kontrol et
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Geçerli bir e-posta adresi girin.' });
    }

    // Şifre uzunluğunu kontrol et
    if (password.length < 6) {
        return res.status(400).json({ error: 'Şifre en az 6 karakter olmalıdır.' });
    }

    next();
};

export default loginMiddleware