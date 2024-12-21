function fibonacci(max) {
    let a = 0 
    let b = 1 
    let sum = 0
    
    while(b < max) {

        if(b%2 === 0 ){
            sum += b 
        }

        let next = a + b 
        a = b 
        b = next
    }

    return sum 
}


//Take aways: 

// I need to actually visualize what is happening with each pointer 
