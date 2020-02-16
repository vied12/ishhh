import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const styles = () => ({
  selectBox: {
    width: 120,
    margin: 20,
  },
})

const Selector = ({ classes, value, label, choices, onChange }) => {
  const id = `id_${Math.floor(Math.random() * 10000)}`
  return (
    <FormControl className={classes.selectBox}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        value={value}
        onChange={event => onChange(event.target.value)}
        fullWidth
        inputProps={{
          name: id,
          id: id,
        }}
      >
        {choices.map(choice => (
          <MenuItem value={choice} key={choice}>
            {choice}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default withStyles(styles)(Selector)
