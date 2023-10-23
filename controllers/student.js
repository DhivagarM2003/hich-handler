// Import the Prisma Client
//const prisma = require('../index');
const { PrismaClient } = require('../prisma/client');
const prisma = new PrismaClient();

class student{
    static async register(params) 
    {
        await prisma.Student.create({data:{
            "roll":params.roll,  
            "name":params.name,
            "email":params.email,
            "phone":params.phone,
            "dob":params.dob,
            "password":params.password,
        }
        
        });
        return true;

        
    }
}
module.exports=student;