const bcrypt = require("bcrypt");

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 12);
}

export const checkHash = async (plainText: string, hash: string) => {
    return bcrypt.compare(plainText, hash);
}