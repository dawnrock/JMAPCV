import React from 'react';

const PrintButton = () => {
    const handleDownload = async () => {
        try {
            const response = await fetch('/cv.html');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CV.html';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error al descargar el CV:', error);
            alert('No se pudo descargar el CV. Asegúrate de que el archivo cv.html existe en la carpeta public.');
        }
    };

    return (
        <div className="print-controls">
            <button onClick={handleDownload} className="btn-print">
                <i className="fas fa-file-download"></i> Descargar CV
            </button>
        </div>
    );
};

export default PrintButton;
