import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@test.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Natascha',
        email: 'nah@test.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'John',
        email: 'john@test.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default users