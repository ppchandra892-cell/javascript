let pname="marker pan"
class Product{
    constructor(){
        console.log("product class constructure");
    }
}
// module.exports=pname;//default export
module.exports={pname,Product} //named export
