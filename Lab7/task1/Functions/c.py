def Xor(x, y):
    return x != y  # возвращает True, если ровно один из x или y равен True

# чтение входных данных
x, y = map(int, input().split())
print(int(Xor(x, y)))  # выводим 0 или 1