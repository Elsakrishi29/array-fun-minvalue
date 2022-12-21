function minimum(){
    let array=[56,90,40,378,24,78,18]
    let min=array[0];
    
    let len=array.length;
    console.log("array length: " +len);

    for(i=0;i<len;i++){
        if(array[i]<=min){
            min=array[i];
        }
    }
        console.log(min);
}
minimum();
