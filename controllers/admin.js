// Import the Prisma Client
//const prisma = require('../index');
const { PrismaClient } = require('../prisma/client');
const prisma = new PrismaClient();

class admin{
   
   
    static async register(params) 
    {
        await prisma.Admin.create({data:{
            "domain":params.domain,  
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
            result= await prisma.Admin.findUnique({
             where:{email:params.email,password:params.pass} 
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
    
    
    static async createlog(params) 
    {
        await prisma.Post.create({data:{
            "postid":params.postid,
            "status ":params.status ,
            "feedback":params.feedback,  
           
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
module.exports=admin;