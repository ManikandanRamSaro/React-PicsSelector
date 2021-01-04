import React from 'react';

const ImageList = (props) =>{
    const imageList = props.images.map(({id,description,urls})=>{
        return <img key={id} alt={description} src={urls.regular}/>
    })

    return <div>{imageList}</div>;
}

export default ImageList;