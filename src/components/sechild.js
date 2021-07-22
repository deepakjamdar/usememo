import React, {useEffect} from 'react';

let renderCount = 0;

function Sechild() {
    useEffect(() => {
        renderCount ++;
    })

   return (
       <div>
         renderCount for 2nd child: {renderCount}  
       </div>
   ) 

}

export default React.memo(Sechild);