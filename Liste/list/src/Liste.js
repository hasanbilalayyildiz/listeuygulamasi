import React from 'react';

const Liste = ({liste,deleteListe}) => {
    const tList = liste.length ? (
        liste.map(list=> {
        return (
            <div className="collection-item" key={list.id}>
           <span onClick={()=> {deleteListe(list.id)}}>{list.content} </span>
            </div>

        )
    })
    ) : (
     <p className="center">Listede eleman yok.</p>
    )
    return(
    <div className= "list collection">
        {tList}
    </div>
    )

}
export default Liste ;
