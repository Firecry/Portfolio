import { useRef, useEffect } from 'react'

export function MouseCanvas(props){
    const canvasmouseRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasmouseRef.current;
        const c = canvas.getContext('2d');

        var mouse = {
            x: undefined,
            y: undefined
        }

        window.addEventListener('mousemove', (e)=>{
            mouse.x = e.x;
            mouse.y = e.y;
        })
        
        window.addEventListener('resize', ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        
            // init();
        })

        function animate(){
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);
        
            c.beginPath();
            c.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2, false);
            c.stroke();
            c.fill();
            c.shadowColor = '#f23';
            c.shadowBlur = 10;
            c.shadowOffsetX = 0;
            c.shadowOffsetY = 0;
        }
        
        // init();
        
        animate();

    },[]);

    return <canvas ref={canvasmouseRef} width={props.width} height={props.height} />;
}