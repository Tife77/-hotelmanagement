import React from 'react'
import DownloadReceipt from './DownloadReceipt'

const BookingDetails = () => {
  return (
    <div id='pagetodownload'>
      <div className="receipt-page">
        <h2 className="title">Hotel Bill</h2>
        <div className="receipt-details">
          <p><span>Room Charge:</span> {}</p>
          <p><span>Room Type:</span> {}</p>
          <p><span>Number of Nights:</span> {}</p>
          <p><span>Check-in Date:</span> {}</p>
          <p><span>Check-out Date:</span> {}</p>
          <p><span>Additional Charges:</span></p>
 
           
          <p><span>Taxes & Fees:</span></p>
          <p><span>Total Amount Due:</span> {}</p>
        </div>
      </div>
        <DownloadReceipt rootElementId="pagetodownload" downloadFileName="Receipt"/>
    </div>
  )
}

export default BookingDetails