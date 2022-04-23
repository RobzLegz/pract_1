const pow = (x: number, n: number) => {
    if (n < 0){
        const prevX = x

        while (n < -1){
            x = x * prevX
            n += 1
        }

        console.log(x)

        return 1 / x;
    }

    if (n == 0){
        return 0
    }

    const prevX = x

    while (n > 1){
        x = x * prevX
        n -= 1
    }

    return x
}

const result = pow(2, -4);

if(!result){
    console.log("Nepareizi ievades dati");
}else{
    console.log("Rezultāts: ", result)
}