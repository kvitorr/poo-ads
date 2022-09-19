


# Por não definirmos quais os tipos de dados que a função
# mult(x, y) pode receber, problemas como o do código abaixo
# podem acontecer. Isso se intensifica conforme o crescimento
# do programa. 

def mult(x, y):
    return x * y

x1 = 5
y1 = 10
x2 = 5
y2 = '10'

print(mult(x1, y1)) # Output: 50

print(mult(x2, y2)) # Output: '1010101010' 

