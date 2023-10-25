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
        
        await prisma.statuslog.create({data:{
            "postid":params.postid,
            "status ":params.status ,
            "feedback":params.feedback,
            "status ":params.status   
           
        }
        
        
        });
        
        return true;

        
    }
    static async view_domain_post(params) 
    {
        if(params.domain){
        const result =await prisma.Post.findMany({where:{
            domain:params.domain
        }  
    });
        return result;
    }
    }
    
}
module.exports=admin;