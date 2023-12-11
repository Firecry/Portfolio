import { useRef, useEffect } from 'react'

export function FirefliesCanvas(props){
    const canvasmouseRef = useRef(null);

    useEffect(()=>{



    },[]);

    return <canvas ref={canvasmouseRef} width={props.width} height={props.height} />;
}