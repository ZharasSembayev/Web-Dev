N = int(input())
arr = list(map(int, input().split()))

count = 0
for i in range(1, N):  # начинаем с 1, чтобы есть предыдущий элемент
    if arr[i] > arr[i-1]:
        count += 1

print(count)