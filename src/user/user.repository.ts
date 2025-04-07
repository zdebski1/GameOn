import User from "./user.model";

async function getAllUsers() {
    try {
        const users = await User.findAll();

        const plainusers = users.map(user => user.get({ plain: true }));

        return plainusers;
    }catch(error) {
        console.error('Error fetching users:', error);
    }
}

export default getAllUsers;