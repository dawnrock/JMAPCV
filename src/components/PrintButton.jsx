import React from 'react';

const PrintButton = () => {
    return (
        <div className="print-controls">
            <a href="/cv.html" download="cv.html" className="btn-print">
                <i className="fas fa-file-download"></i> Descargar CV
            </a>
        </div>
    );
};

export default PrintButton;
