import { findUserByUserName } from "../user/user.repository";
import bcrypt from 'bcrypt';
import { HttpError } from "../utils/httpError";


export async function loginService ({
    userName, 
    password 
}: {
    userName: string,
    password: string
}) {
    
    const user = await findUserByUserName(userName);

    if(!user || !(await bcrypt.compare(password, user.password))) {
        throw new HttpError('Username or password is incorrect', 401);
}
return {message: 'Login Successful', userId: user.userId};
}