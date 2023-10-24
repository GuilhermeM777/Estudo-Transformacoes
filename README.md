# Estudo-Transformacoes
### Trabalho feito por: Guilherme Matos de Oliveira e Cauã Magalhães Leão 

## Translação
O método gira em torno da matriz, usando a tela e os eixos x e y para a movimentação do objeto no qual foi atribuído, sendo x unidade de origem horizontal e x unidade de origem vertical na grade. Para os parâmetros seria de X e Y, o X como dito antes será usado para movimentação horizontal, os seu valores para direita da tela serão positivo e para esquerda será os negativos, já para Y será o oposto, sendo sua movimentação verticalmente, sendo para cima positivo e para baixo negativo. Ou seja, com os valores dentro da síntaxe definirá a posição deles baseado nos valores colocados no parâmetro. 


![image](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127865701/0f9f5524-7bf6-47eb-a139-61d8838929f4)  

![translaçãocod](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/e9b42849-f375-4ad4-8f82-e240046aa946)

Aplicado no canvas
![translação](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/d02c7a8f-2068-4c62-a511-c9714ac34a08)

(Exemplo de como seria a grade na tela do computador)

## Rotação 
O método de Rotação, vai ser baseado fortemente no de Translação, a diferença entre eles será como ele se comporta com os valores, tendo mais atribuições para a movimentação de rotação seja realizada no objeto, porém como o de translação gira em torno de matriz, com a adição do ângulo e do MathPi, usado no sentido horário em radianos, para calcular  um radiano a partir de um grau, como exemplo 45 graus, então você colocará o valor do grau, vezes o MathPi.


![image](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127865701/91b56f0c-a8a4-4bbd-8a44-a0ad77359fee)

![rotate](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/07783fb4-7935-4459-8c04-b42f8a841076)

Aplicado no canvas
![roda](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/7c1fc507-798d-46be-b8cd-8be283efb3ab)


(Exemplo de como seria a grade na tela do computador em função da rotação)

## Scale
Usando o método de Scale, você irá adicionar uma escala as unidades da tela, tanto horizontalmente quanto verticalmente, o básico é a unidade da tela ser 1 pixel, os valores determinados no Scale vai modificar esse comportamento, podendo dobrar tamanho de algumas figuras e coisas do gênero, a sua síntaxe é bem simples, tendo só os valores de X e Y dentro dela, dai você irá usá-la talvez para aumentar algum objeto, sendo bem fácil de ser manipulada.


![image](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127865701/d488f912-dbac-4f4a-8f1c-974538a0db07)

![scale](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/c062b153-d591-4ccc-86af-0dd103e840ee)
Aplicando no canvas
![escala](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/689c942e-03cd-4a23-8c54-674c72bae752)


(Exemplo de Scale usado nessa síntaxe ctx.scale(9, 3); 
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 8, 20);)

## Transform 
O método Transform, vai ser utilizado para você alterar as dimensões já existentes da matriz descrita pelos argumentos deste metódo. Isso permite dimensionar, girar, traduzir (mover) e distorcer o contexto. Conseguindo multiplicar a transformação atual, seguindo o exemplo: transform(a, b, c, d, e, f). Para localizar o que é cada um é só pensar em uma matriz 3x3, onde o a, c, e, ficarão na primeira linha, b, d, f, na terceira, e, 0, 0, 1, na terceira linha. Se tivesse coordenada (x, y), depois da transformação teria coordenada (ax+cy+e,bx+dy+f), significaria que E e F iriam controlar a horizontal e vertical do contexto. Enquanto b e c são 0, a e d controlam a escala horizontal e vertical do contexto.
Quando a e d são 1, b e c controlam a inclinação horizontal e vertical do contexto.


![image](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127865701/90bfdde1-831e-48b4-8765-d2f7897e0980)

![transform](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/f0583da4-fa69-4485-8d6d-db694a13b870)

![transformação](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/7b18a6c4-ff8b-4de3-8119-c7e068e13418)


(Um exemplo de Transform sendo utilizado.)

## Clipping Path 
O método Clipping Path, pode ser usado como uma máscara para se livrar de partes indesejadas do objeto na qual você não queira que apareça, então será determinada uma área na qual queira que seja aplicado o Clipping, para qualquer coisa que não seja feito dentro desse Path, será desconsiderado do objeto. 


![image](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127865701/d5d4f38d-a4ee-4b78-bff4-b3849a802ca0)

![clipcod](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/d50b9c95-e49b-466e-af33-6bbc7a57e489)

![clip](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/b16829b9-f59d-4206-b54e-42991ae130a2)


(Exemplo de uso de Clipping Path, forma de estrela vermelha é o nosso traçado de recorte. Tudo o que estiver fora desse caminho não será desenhado na tela)

# Diagrama
![diagrama](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127852558/1370e34e-3f3f-4453-82bc-9bce3d1116bf)


# Git Bash
Aqui estarão os comandos que realizamos, e que tem que ser realizados no Git Bash, para o envio de arquivos ao Git Hub.

![image](https://github.com/GuilhermeM777/Estudo-Transformacoes/assets/127865701/f4215bdc-ade1-432c-8eda-09162d0deab1)

