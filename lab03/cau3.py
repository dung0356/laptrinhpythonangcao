content = []
for line in open('/content/sample_data/tiendung.txt'):
    content.append(line)
print('Doc nguoc file :\n ',)
for line in reversed(content):
    print(line)