def smallest_value_skip2(reader):
    line = skip_header(reader).strip()
    
    
    smallest = line

    for line in reader: 
        line = line.strip()
        if line == '-':
            continue

    value = line
    smallest = min(smallest, value)

    return smallest

input_file = open('tiendung.txt', 'r')
print(smallest_value_skip2(input_file))
input_file.close()