import React from 'react';

const ImageList = (props) =>{
    return props.images.map((img)=>{
        return <img key={img.id} src={img.urls.regular}/>
    })
}

export default ImageList;