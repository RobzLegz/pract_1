def selectSort(array):
    result = array

    for i in range(len(result)):
        min_idx = i
        for j in range(i+1, len(result)):
            if result[min_idx] > result[j]:
                min_idx = j

        result[i], result[min_idx] = result[min_idx], result[i]

    return result


array = [1, 3, 6, 4, 9, 5]

result = selectSort(array)

print("Sorted array:", *result)
