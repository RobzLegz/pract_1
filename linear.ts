const linearSearch = (array: number[], x: number) => {
    let result = null;

    array.forEach(el => {
        if(el === x){
            result = array.indexOf(x);
        }
    });

    return result;
}

const array = [1, 3, 6, 4, 9, 5];

const result = linearSearch(array, 1);

if(typeof(result) === "number"){
    console.log("Elements atrasts ar indexu:", result);
}else{
    console.log("Elements netika atrasts");
}
