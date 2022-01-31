import React from 'react';

export function Loading(){
    return(
        <div className='text-center'>
            <div className="spinner-border" role="status" style={{width:'80px',height:'80px'}}>
               <span className="sr-only">Loading...</span>
            </div>
        </div>

    )
}