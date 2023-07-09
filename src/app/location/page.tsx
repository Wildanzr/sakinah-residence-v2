import { Metadata } from 'next'
import { CustomBanner, LocationMap } from '@/views'

export const metadata: Metadata = {
  title: "Locations - Sakinah Residence",
  description: "This is sakinah residence locations",
}

export default function Location() {
  return (
    <>
      <CustomBanner title='Lokasi' />
      <LocationMap />
    </>
  )
}