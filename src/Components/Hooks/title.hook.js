import { useEffect, useState } from 'react'

const useTitle = tls => {
  let title
  useEffect(() => {
    title = tls
  }, [])
  return title
}

export default useTitle
