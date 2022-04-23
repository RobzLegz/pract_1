def pow(x, n):
    if n < 0:
        return None

    if n == 0:
        return 0

    prev_x = x

    while n > 1:
        x = x * prev_x
        n -= 1

    return x

result = pow(4, 1)

if result:
    print("Rezultāts: ", result)

else:
    print("Nepareizi ievades dati")
