import User from "./user.model";

export async function getAllUsers() {
    try {
        const users = await User.findAll();

        return users.map(user => user.get({ plain: true }));
    }catch(error) {
        console.error('Error fetching users:', error);
    }
}