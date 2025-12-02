import React from 'react';

const PrintButton = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="print-controls">
            <button onClick={handlePrint} className="btn-print">
                <i className="fas fa-file-pdf"></i> Guardar como PDF
            </button>
            <p className="print-hint">
                Tip: En la ventana de impresión, selecciona "Guardar como PDF" y asegúrate de activar "Gráficos de fondo".
            </p>
        </div>
    );
};

export default PrintButton;
