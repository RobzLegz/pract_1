from operator import indexOf


def linearSearch(array, x):
    for el in array:
        if el == x:
            return indexOf(array, x)

    return None

array = [1, 3, 6, 4, 9, 5]

result = linearSearch(array, 1)

if result != None:
    print("Elemants atrasts ar indexu: ", result)
else:
    print("Elements netika atrasts")
