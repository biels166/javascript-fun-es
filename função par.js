function testePar(num){
    for(n = num; n >0; n--){
        if(n % 2 == 0){
            console.log(n + " é par.");
        }
    }
}

testePar(100);
testePar(10);