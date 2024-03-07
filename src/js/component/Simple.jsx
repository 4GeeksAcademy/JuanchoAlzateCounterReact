import React, { useState, useEffect } from 'react';

const Simple = () => {
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond(prevSecond => prevSecond + 1);
        }, 1000);

        // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
        return () => clearInterval(intervalId);
    }, []); // El efecto se ejecuta solo una vez cuando el componente se monta


    return (
        <div>
            <h1 className='contador'>{second}</h1>
        </div>
    );
};

export default Simple;


///////////////////////////////////////// SECONDSCOUNTER ///////////////////////////////////////

// const SecondsCounter = () => {
    
    //     const [seg, setSeg] = useState(0);
    
    //     let timer;
    
    //     useEffect( ()=>{
        
//         timer = setInterval(()=>{
    //             {setSeg(seg+1)}
    //             if (seg === 1000){
        //                  {setSeg(0)};
        //                 alert("tiempo agotado");    
        //             }
        //             setInput(inputRef.current.value)
        //         },1000)
        //         return ()=> clearInterval(timer)
        //     });  
        //    const formattedSeg = seg.toString().padStart(6, "0");
        
        //     return(
            
//          <div className="rounded border ">
//             <div className="text-light">          
//                 <h1>             
//                 <i class="fa-solid fa-clock"></i> {formattedSeg}
//                  </h1>        
//             </div>     
//          </div>   
//     );
// }

// export default SecondsCounter;


///////////////////////////////////////// HOME ///////////////////////////////////////

// const Home = () => {

// 	return (
// 		<div className="text-center">
// 			<SecondsCounter />
// 			<Increment />
// 		</div>
// 	);
// };