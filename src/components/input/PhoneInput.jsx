import React from 'react'

const PhoneInput = () => {
    
  return (
    <div className="form__control">
    <input
      onChange={handleInputChange}
      name="name"
      type="text"
      placeholder={`Ваше ім'я`}
    />
  </div>
  )
}

export default PhoneInput