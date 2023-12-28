import React, { useId } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'

export default function InputBox(props) {
    const { label, amount, onAmountChange, currencyOptions = [], onCurrencyChange, selectCurrency } = props

    const amountInputId = useId()

    return (
        <Paper sx={{ minWidth: '32rem', p: 2, borderRadius: 2, boxShadow: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <InputLabel htmlFor={amountInputId}>
                    <Typography variant='body1' color='primary.dark'>
                        {label}
                    </Typography>
                </InputLabel>
                <InputLabel htmlFor={amountInputId}>
                    <Typography variant='body1' color='primary.dark'>
                        Currency Type
                    </Typography>
                </InputLabel>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    id={amountInputId}
                    type='number'
                    size='small'
                    sx={{ width: 120 }}
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
                <FormControl sx={{ width: 120 }} size='small'>
                    <Select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                        {currencyOptions.map((currency) => (
                            <MenuItem key={currency} value={currency}>
                                {currency}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Paper>
    )
}
