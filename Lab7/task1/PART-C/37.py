def sum13(nums):
    total = 0
    skip = False  # флаг, чтобы пропустить число после 13
    for num in nums:
        if num == 13:
            skip = True   # следующее число пропускаем
            continue      # 13 не добавляем
        if skip:
            skip = False  # пропускаем только одно число после 13
            continue
        total += num
    return total