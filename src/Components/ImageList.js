import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) =>{
    const imageList = props.images.map((img)=>{
        return <ImageCard key={img.id} image={img}/>
    })

    // const imageList = props.images.map(({id,description,urls})=>{
    //     return <img key={id} alt={description} src={urls.regular}/>
    // })
    return <div className="image-list">{imageList}</div>;
}

export default ImageList;