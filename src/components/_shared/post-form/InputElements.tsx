import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Switch from '@mui/material/Switch'
import Autocomplete from '@mui/material/Autocomplete'

import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
import Filters from 'bad-words'
import clsx from 'clsx'
import React, { useState } from 'react'

interface TEXTFIELD {
  label: string
  placeholder: string
  type: 'TEXTFIELD'
}

interface SELECT {
  label: string
  placeholder: string
  type: 'SELECT'
  options: string[]
}
interface CHECKBOX {
  label: string
  type: 'CHECKBOX'
  options: string[]
}
interface SWITCH {
  label: string
  type: 'BOOLEAN'
  children?: SELECT
}

function format(myarr) {
  for (var i = 0; i < myarr.length; i++) {
    myarr[i] = myarr[i].charAt(0).toUpperCase() + myarr[i].slice(1)
  }
  return myarr
}

export type InputElementsType = TEXTFIELD | SELECT | CHECKBOX | SWITCH

const useStyles = makeStyles((theme) => ({
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      background: 'rgba(8, 68, 294, 0.07)',
      borderColor: 'rgba(8, 68, 294, 0.07)',
      borderRadius: 18,
    },
  },
  wrapper: {
    width: '100%',
    //paddingTop: '30px',
    '@media (min-width: 320px) and (max-width: 959px)': {
      padding: 0,
    },
  },
  box: {
    marginTop: 20,
    '@media (min-width: 320px) and (max-width: 959px)': {
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'flex-start',
    },
  },
  label: {
    textAlign: 'left',
    fontWeight: 600,
    width: '100px',
    color: '#000',
    marginRight: 20,
    '@media (min-width: 320px) and (max-width: 959px)': {
      marginBottom: 20,
    },
  },
  otherLabel: {
    marginBottom: 20,
  },
}))

const InputElements = ({
  prop,
  handleChange,
  parent,
  attributes,
}: {
  prop: InputElementsType
  attributes: any
  handleChange: (
    value: any,
    name: string,
    parent: string,
    children?: string
  ) => void
  parent: string
}): JSX.Element => {
  const classes = useStyles()
  const [checkboxOpen, setCheckboxOpen] = useState(false)
  const filter = new Filters()

  const getDefaultValue = (type: string, param?: any) => {
    attributes
    if (type === 'TEXTFIELD') {
      const child =
        attributes && attributes[parent]
          ? attributes[parent][prop.label]
          : undefined
      return child
    } else if (type === 'CHECKBOX') {
      const child =
        attributes && attributes[parent] ? attributes[parent][param] : false
      return child ?? false
    } else if (type === 'BOOLEAN') {
      const child =
        attributes && attributes[parent]
          ? attributes[parent][prop.label]
          : false
      if (checkboxOpen !== child) setCheckboxOpen(child)
      return child
    }
  }

  return (
    <>
      {/* <Grid
        // container
        // justifyContent="flex-start"
        sm={12}
        lg={12}
        style={{ margin: 'auto', marginLeft: '16%', marginBottom: '30px' }}
      > */}
      <Box
        display="flex"
        flexDirection="row"
        className={classes.box}
        alignItems="center"
      >
        {prop.label ? (
          <InputLabel
            className={clsx(
              classes.label,
              `${prop.label === 'Other' ? classes.otherLabel : ''}`
            )}
            // variant="standard"
          >
            {prop.label}
          </InputLabel>
        ) : null}
        {prop.type === 'TEXTFIELD' && (
          <div className={classes.wrapper}>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
              <Grid
                container
                spacing={1}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Autocomplete
                    multiple
                    id="tags-filled"
                    value={
                      attributes?.[parent]?.[prop?.label]
                        ? attributes[parent][prop?.label]
                        : []
                    }
                    options={[]}
                    freeSolo
                    renderTags={(value: any, getTagProps: any) =>
                      value.map((option: any, index: any) => (
                        <Chip
                          key={index}
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Write & press enter to add upto 5 tags"
                        placeholder={prop.placeholder}
                        className={classes.input}
                      />
                    )}
                    onChange={(event, newValue) => {
                      // console.log('newvalue: ',  newValue)
                      if (
                        newValue.length <= 5 &&
                        !filter.isProfane(newValue[newValue.length - 1])
                      )
                        handleChange(format(newValue), prop.label, parent)
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
        )}
        {prop.type === 'CHECKBOX' && (
          <div style={{ width: '100%' }}>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
              <Grid container spacing={1}>
                {prop.options.map((option: string, index: number) => (
                  <Grid item xs={12} sm={12} md={3} lg={3} xl={3} key={option}>
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox
                          color="primary"
                          defaultChecked={getDefaultValue(prop.type, option)}
                          onChange={(e: any) => {
                            handleChange(e.target.checked, option, parent)
                          }}
                        />
                      }
                      label={option}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Divider style={{ margin: '30px auto' }} />
          </div>
        )}
        {prop.type === 'SELECT' && (
          <div className={classes.wrapper}>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
              <Grid
                container
                spacing={1}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Select
                    onChange={(e) => {
                      handleChange(e.target.value, prop.label, parent)
                    }}
                    value={
                      attributes &&
                      attributes[parent] &&
                      attributes[parent][prop.label]
                    }
                    variant="outlined"
                    className={classes.input}
                    fullWidth
                  >
                    {prop.options.map((option: string) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </Box>
          </div>
        )}
        {prop.type === 'BOOLEAN' && (
          <div className={classes.wrapper}>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
              <Grid
                container
                spacing={1}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                  <Switch
                    color="primary"
                    defaultChecked={getDefaultValue(prop.type)}
                    onChange={(e) => {
                      handleChange(
                        e.target.checked,
                        prop.label,
                        parent,
                        prop.children?.label
                      )
                      setCheckboxOpen(e.target.checked)
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                  {checkboxOpen && prop.children && (
                    <Select
                      value={
                        // attributes &&
                        // attributes[parent] &&
                        // attributes[parent][prop.label]
                        attributes[parent][prop?.children?.label]
                      }
                      onChange={(e) => {
                        handleChange(
                          e.target.value,
                          prop.children!.label,
                          parent
                        )
                      }}
                      defaultValue={getDefaultValue(
                        prop.type,
                        prop.children.options
                      )}
                      variant="outlined"
                      fullWidth
                      placeholder={prop?.children?.label}
                      className={classes.input}
                    >
                      {prop.children.options.map((option: string) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Grid>
              </Grid>
            </Box>
          </div>
        )}
      </Box>
      {/* </Grid> */}
    </>
  )
}
export default InputElements
