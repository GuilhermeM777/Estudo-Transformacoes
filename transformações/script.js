const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');

        // Classe Forma representa o objeto que será desenhado e transformado
        class Forma {
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

        const Forma = new Forma(200, 200);

        function drawScene() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            Forma.draw();
        }

        drawScene();

        function translateObject() {
            // Aplica translação ao objeto
            Forma.x += 50;
            Forma.y += 50;
            drawScene();
        }

        function rotateObject() {
            // Aplica rotação ao objeto
            Forma.rotation += Math.PI / 4;
            drawScene();
        }

        function scaleObject() {
            // Aplica escala ao objeto
            Forma.scaleX *= 2;
            Forma.scaleY *= 2;
            drawScene();
        }

        function transformObject() {
            // Aplica uma combinação de transformações (translação, rotação e escala) ao objeto
            Forma.x += 20;
            Forma.y += 20;
            Forma.rotation += Math.PI / 4;
            Forma.scaleX *= 1.5;
            Forma.scaleY *= 1.5;
            drawScene();
        }

        function clipObject() {
            // Aplica um Clipping Path ao objeto (recorte)
            context.beginPath();
            context.arc(Forma.x, Forma.y, 50, 0, 2 * Math.PI); // Aumentei o raio para 50
            context.clip();
            drawScene();
        }
