const selectSort = (array: number[]) => {
    let result = array;

    for (let i = 0; i < result.length; i++){
        let min_idx = i;

        for (let j = i+1; j < result.length; j++){
            if (result[min_idx] < result[j]){
                min_idx = j;
            }

            let temp = result[min_idx];
            result[min_idx] = result[j];
            result[j] = temp;
        }
    }

    return result;
}

const array = [1, 3, 6, 4, 9, 5];

const result = selectSort(array);

console.log("Sorted array:", result)
