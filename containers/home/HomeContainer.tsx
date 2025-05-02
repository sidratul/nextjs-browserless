import React from 'react'
import { UrlForm } from './UrlForm'

export const HomeContainer = () => {
  return (
    <UrlForm
      onSubmit={(data) => {
        console.log("data", data);
      }}
    />
  )
}
