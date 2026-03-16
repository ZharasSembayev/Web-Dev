N = int(input())
x = 1  # текущая степень двойки
k = 0  # счетчик степеней

while x < N:
    x *= 2
    k += 1

print(k)