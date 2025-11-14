let gotogoa=(success,failure)=>{
    let acc_bal=10000;
    if(acc_bal>=15000){
         success("go and enjoy");
    }
    else{
        failure("come sit and practice")
    }
}
gotogoa((msg)=>{console.log(msg)},(err)=>{console.log(err);})