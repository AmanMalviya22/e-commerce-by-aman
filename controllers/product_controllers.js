const productModel = require("../models/product");

module.exports.createproduct = async function(req, res){
    // destructure 
     const {name, quantity} = req.body;
 
     try{
 
     // validation
     if(!name || !quantity ){
         return res.status(402).json({
             success: false,
             message: "name is not valid field",
         })
     }
 
      // creating
     let product = await productModel.create({
         name: name,
         quantity: quantity,
         
     });
 
 
     return res.status(200).json({
         success: true,
         data: product,
     });
 
 }catch(error){
     return res.status(500).json({
         success: false,
         message: error.message,
     });
 }
     
 };


 // get product 
 module.exports.getproduct = async function getproduct(req, res){
    try {
       let productList =  await productModel.find({});
     if(!productList){
        todoList = [];
     }
     return res.status(200).json({
        success: true,
        data: productList,
     });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });  
    }
};

// delete product
module.exports.deleteproduct = async function(req, res){
    const { id } = req.params;
   
   try {
    
    productModel.findByIdAndDelete(id, function(err, data){
        if(err){
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
        
        return res.status(200).json({
            success: true,
            data: data
        });
    });
    
   } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Internal server error",
    });
   }
};

// update the product
module.exports.updateproduct = async function updateproduct(req , res){
    const {id, quantity} = req.params;
    try {
        // let product = await productModel.findById({id});
        productModel.findByIdAndUpdate(id, {quantity: quantity}, function(err, data){
           
         if(err){
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });  
         }


            return res.status(200).json({
                success: true,
                data: data,
            });
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}