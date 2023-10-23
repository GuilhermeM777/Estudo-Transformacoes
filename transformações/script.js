const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');

        // Classe Shape representa o objeto que será desenhado e transformado
        class Shape {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.rotation = 0;
                this.scaleX = 1;
                this.scaleY = 1;
            }

            draw() {
                context.save();
                context.translate(this.x, this.y);
                context.rotate(this.rotation);
                context.scale(this.scaleX, this.scaleY);

                // Desenhe seu objeto aqui (no exemplo, um retângulo azul)
                context.fillStyle = 'blue';
                context.fillRect(-20, -20, 40, 40);

                context.restore();
            }
        }

        const shape = new Shape(200, 200);

        function drawScene() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            shape.draw();
        }

        drawScene();

        function translateObject() {
            // Aplica translação ao objeto
            shape.x += 50;
            shape.y += 50;
            drawScene();
        }

        function rotateObject() {
            // Aplica rotação ao objeto
            shape.rotation += Math.PI / 4;
            drawScene();
        }

        function scaleObject() {
            // Aplica escala ao objeto
            shape.scaleX *= 2;
            shape.scaleY *= 2;
            drawScene();
        }

        function transformObject() {
            // Aplica uma combinação de transformações (translação, rotação e escala) ao objeto
            shape.x += 20;
            shape.y += 20;
            shape.rotation += Math.PI / 4;
            shape.scaleX *= 1.5;
            shape.scaleY *= 1.5;
            drawScene();
        }

        function clipObject() {
            // Aplica um Clipping Path ao objeto (recorte)
            context.beginPath();
            context.arc(shape.x, shape.y, 50, 0, 2 * Math.PI); // Aumentei o raio para 50
            context.clip();
            drawScene();
        }