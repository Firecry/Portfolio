import { useRef, useEffect } from 'react'

export function Canvas(props){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const c = canvas.getContext('2d');

        var ballAmount = 50;

        var colorPalette = [
            '#692400',
            '#BDA79D',
            '#87736A',
            '#004607',
            '#357736'
        ];

        window.addEventListener('resize', ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            init();
        })

        // Animated Circle
        function Circle(x, y, dx, dy, radius){
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.minRadius = radius;
            this.mindx = dx;
            this.mindy = dy;
            this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

            this.draw = ()=>{
                c.beginPath();
                c.fillStyle = this.color;
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.strokeStyle = '#222';
                c.stroke();
                c.fill();
            }

            this.update = ()=>{
                if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
                    this.dx = -this.dx;
                }
                if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
                    this.dy = -this.dy;
                }
            
                this.x += this.dx;
                this.y += this.dy;

                if(this.dy < 10){
                    this.dy+=0.01;
                }

                this.draw();
            }
        }

        var circleArray = []

        function init(){
            circleArray = []

            for(let i = 0; i < (ballAmount + 1); i++){
                // eslint-disable-next-line
                var x = Math.floor(Math.random() * (canvas.width - radius * 5) + radius);
                // eslint-disable-next-line
                var y = Math.floor(Math.random() * (canvas.height - radius * 5) + radius);
                var dx = (Math.random() - .5) * 5;
                var dy = (Math.random() - .5);
                var radius = Math.random() * 5 + 3;

                circleArray.push(new Circle(x, y, dx, dy, radius));
            }
        }

        function animate(){
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < circleArray.length; i++){
                circleArray[i].update();
            }
        }

        init();

        animate();


          // eslint-disable-next-line
    },[]);

    return <canvas ref={canvasRef} width={props.width} height={props.height} />;
}