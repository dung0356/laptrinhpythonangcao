def skip_header(reader):
    
   
    line = reader.readline()    
    line = reader.readline()
    while line.startswith('#'):
        line = reader.readline() 
    
    return line

def process_file(reader):
    
    line = skip_header(reader).strip()
    print(line)
    
    for line in reader:
        line = line.strip()
        print(line)

input_file = open('tiendung.txt', 'r')
process_file(input_file)
input_file.close()