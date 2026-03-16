def count_code(s):
    count = 0
    for i in range(len(s) - 3):       # идём до четвертого с конца
        if s[i] == 'c' and s[i+1] == 'o' and s[i+3] == 'e':
            count += 1
    return count