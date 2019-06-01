import React from 'react';
import QrReader from 'react-qr-reader';

export default function index() {
  return (
    <div>
      <QrReader delay={1000}
      onError={()=>{
          console.log('error');
      }}
      onScan={()=>{
          console.log('deu certo');
      }}
      style={{width: '100%'}}
      />
    </div>
  )
}
