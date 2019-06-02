import React from 'react';
import QrReader from 'react-qr-reader';

export default function index({onScan, onError}) {
  return (
    <div>
      <QrReader delay={1000}
      onError={onError}
      onScan={onScan}
      style={{width: '100%'}}
      />
    </div>
  )
}
