def Election(x, y, z):
    # сумма значений True (1) среди x, y, z
    if x + y + z >= 2:
        return 1  # большинство True
    else:
        return 0  # большинство False

# чтение входных данных
x, y, z = map(int, input().split())
print(Election(x, y, z))