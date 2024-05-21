'use client';

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image className="h-100" src="loading.gif" alt="Loading..." />
    </div>
  )
}
