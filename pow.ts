const pow = (x: number, n: number) => {
    if (n < 0){
        let positiveN = +n;

        const prevX = x

        while (positiveN < 1){
            x = x * prevX
            positiveN += 1
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

const result = pow(2, -1);

if(!result){
    console.log("Nepareizi ievades dati");
}else{
    console.log("Rezultāts: ", result)
}