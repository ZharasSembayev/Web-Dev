N = int(input())
arr = list(map(int, input().split()))

count = 0
for i in range(1, N - 1):  # элементы с двумя соседями: от 1 до N-2
    if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
        count += 1

print(count)