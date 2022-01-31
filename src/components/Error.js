import React from 'react';

export function Error({error}){
    return (
        <div>
            <div className="alert alert-danger" role="alert">
               {error}
            </div>
        </div>
    )
}