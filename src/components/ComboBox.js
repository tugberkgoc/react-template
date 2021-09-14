/* eslint-disable no-use-before-define */
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export default function ComboBox ({
  options,
  label,
  variant = 'outlined',
  onChange
}) {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={option => option.title}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant={variant}
          onChange={onChange}
        />
      )}
    />
  )
}
