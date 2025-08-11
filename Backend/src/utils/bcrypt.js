import bcrypt from 'bcrypt'

export const hashPassword = async(password) => {
    return bcrypt.hash(password, 5);
}

export const verifyPassword = async(password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}