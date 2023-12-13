import { useRef, useEffect } from 'react'

export function FirefliesCanvas(props){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const c = canvas.getContext('2d');

        var ballAmount = 100;

        var colorPalette = [
            '#CDEC27',
            '#87D832',
            '#2EC241',
            '#00AA50',
            '#00905C',
            '#007664'
        ];

        window.addEventListener('resize', ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            init();
        })

        function randomIntFromRange(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var lottery = [
            'Math.cos(this.radians)',
            'Math.sin(this.radians)'
        ]

        // Animated Circle
        function Circle(x, y, radius){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.minRadius = radius;
            this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            this.radians = 0;
            this.velocity = Math.random() * 0.015 + 0.002;
            this.winner = lottery[Math.floor(Math.random() * lottery.length)].value;
            this.distance = {
                x: randomIntFromRange(Math.floor(Math.random() * 120), Math.floor(Math.random() * 120)),
                y: randomIntFromRange(Math.floor(Math.random() * 50), Math.floor(Math.random() * 80))
            }

            this.update = ()=>{
                this.radians += this.velocity;
                this.x = x + Math.sin(this.radians) * this.distance.x;
                this.y = y + Math.cos(this.radians) * this.distance.y;
                this.draw();
            }

            this.draw = ()=>{
                c.beginPath();
                c.fillStyle = this.color;
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.strokeStyle = '#222';
                c.fill();
                c.shadowColor = '#CDEC27';
                c.shadowBlur = 20;
                c.shadowOffsetX = 0;
                c.shadowOffsetY = 0;
            }
        }

        var circleArray = []

        function init(){
            circleArray = []

            for(let i = 0; i < (ballAmount + 1); i++){
                // eslint-disable-next-line
                var x = Math.floor(Math.random() * (canvas.width - radius * 20) + radius);
                // eslint-disable-next-line
                var y = Math.floor(Math.random() * (canvas.height - radius * 40) + radius);

                var radius = Math.random() * 3 + 1.5;
                

                circleArray.push(new Circle(x, y, radius));
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