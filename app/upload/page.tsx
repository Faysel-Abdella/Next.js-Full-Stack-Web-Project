"use client"
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface CloudinaryResult {
    public_id: string
}

const UplaodPage = () => {
    const [publicId, setPublicId] = useState('')
  return (
    <>
    {publicId && <CldImage 
        src={publicId} width={270} height={180} alt='uploaded img'
    />}
   <CldUploadWidget 
   uploadPreset="yzkuuaq2"
   options={{
       sources: ['local'],
       maxFiles: 5,
       styles: {
        tabIcon: "#0078FF",
            menuIcons: "#5A616A",
            textDark: "#000000",
       }
    }}
    onUpload={(result, widget) => {
        // result is {event: "success", info: {.....}}
        console.log(result)
        if (result.event !== 'success') return;
        const info = result.info as CloudinaryResult
        setPublicId(info.public_id)
    }}
   >
    {({open}) =>
     <button className='btn btn-primary'
     onClick={() => open()}
     >Upload</button>}
   </CldUploadWidget>
    </>

  )
}

export default UplaodPage