import React from 'react';
import QRcode from 'qrcode.react';
import { jsPDF } from 'jspdf';

const PdfWithQRGenerator = () => {

    const generatePDF = () => {

        // <QRcode value = {'Sample QR Testing'} id = 'qrcode'/>

        // Defines the pdf
        let pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        })

        //Adding Personal Details
        var name = 'John Doe';
        var age = 22;
        var sex = 'M';
        var email = 'doejohn@gmail.com';
        var phone = '9345342345'
        pdf.text('Personal Details',20,20);
        pdf.text('Name : '+name,30,30);
        pdf.text('Age : '+age,30,40);
        pdf.text('Sex : '+sex,30,50);
        pdf.text('Email : '+email,30,60);
        pdf.text('Phone No : '+phone,30,70);

        //Adding Ticket Details
        var departure_time = '15:30';
        var arrivar_time = '18:00';
        var departure_place = 'Kolkata(CCU)';
        var arrival_place = 'New Delhi(NDLS)';
        var flight_no = 'FL12305';
        var price = 7500;
        pdf.text('Ticket Details ',20,80);
        pdf.text('Departure : '+departure_time+' from '+departure_place,30,90);
        pdf.text('Arrival : '+arrivar_time+' at '+arrival_place,30,100);
        pdf.text('Flight No : '+flight_no,30,110);
        pdf.text('Price : Rs.'+price+'/-',30,120);


        // Adding QR code to PDF
        let base64Image = document.getElementById('qrcode').toDataURL()
        pdf.text('QR Code',30,150);
        pdf.addImage(base64Image, 'png', 80, 197, 40, 40)

        // Downloads the pdf
        pdf.save('Ticket.pdf')
    
    }

    return (
        <>
            <QRcode value = {'Sample QR Testing'} id = 'qrcode'/>
            <button type="button"
            className="btn btn-primary container"
            style={{
            fontFamily: "inherit",
            borderRadius: "8px",
            width: "10rem",
            }}
            onClick = {generatePDF}>Download</button>
        </>
    )

}

export default PdfWithQRGenerator;
