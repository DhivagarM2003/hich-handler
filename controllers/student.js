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
    static async login(params) 
    {
        var result={};
        if(params.email)
        {
            result= await prisma.Student.findUnique({
             where:{email:params.email,password:params.pass} 
        });
        }else if(params.roll)
        {
            result = await prisma.Student.findUnique
        ({
             where:{roll:params.roll,password:params.pass} 
        });
        }
        else if(params.phone)
        {
            result = await prisma.Student.findUnique({
             where:{phoneo:params.phone,password:params.pass} 
        });
        }
        return result;
    }
    
 
  
    static async createpost(params) 
    {
        await prisma.Post.create({data:{
            "title":params.title,  
            "desc":params.desc,
            "roll":params.roll,
            "domain":params.domain,
            "location":params.location,
            "type":params.type,
            "currentstatus":params.currentstatus,
            "student":params.student
        }
        
        });
        return true;

        
    }
    static async view_persnol_post(params) 
    {
        if(params.roll){
        const result =await prisma.Post.findMany({where:{
            roll:params.roll
        }  
    });
        return result;
    }
    }
    static async view_public_post() 
    {
        const result = await prisma.Post.findMany({where:{
            type:"public"
        }  
    });
        return result;
    }


}
module.exports=student;