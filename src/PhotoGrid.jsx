import React, { Fragment, useState } from 'react';
import './PhotoGrid.scss';
import Modal from './Modal.jsx';

function PhotoGrid({ photos }) {
    const [currentImage, setCurrentImage] = useState(false);

    const handleOnClick = (source) => (e) => {
        setCurrentImage(source);
    };
    const handleOnClose = () => {
        setCurrentImage(false);
    };

    return (
        <Fragment>
            <Modal image={currentImage} handleOnClose={handleOnClose} />
            <div className="photo-grid">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="photo-grid__item"
                        onClick={handleOnClick(photo.source)}
                    >
                        <img src={photo.source} alt={photo.name} />
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

export default PhotoGrid;
