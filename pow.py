def pow(x, n):
    if n < 0:
        prevX = x

        while n < -1:
            x = x * prevX
            n += 1

        return 1 / x;

    if n == 0:
        return 1

    prev_x = x

    while n > 1:
        x = x * prev_x
        n -= 1

    return x

result = pow(2, -2)

if result:
    print("Rezultāts: ", result)

else:
    print("Nepareizi ievades dati")
