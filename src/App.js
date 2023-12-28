import React, { useState } from 'react'
import { Box, Button, IconButton } from '@mui/material'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    const [rotation, setRotation] = useState(0)
    const [amount, setAmount] = useState(0)
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    const swapCurrencies = () => {
        setRotation((prevRotation) => prevRotation + 180)
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    return (
        <div style={{ position: 'relative' }}>
            <img src='/image/bg.jpg' alt='background' style={{ width: '100vw', height: 'auto', zIndex: -1 }} />
            <div style={{ position: 'absolute', top: '25vh', width: '100%', textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            backgroundColor: '#2B535C80',
                            p: 2.5,
                            border: 2,
                            borderRadius: 4,
                            borderColor: '#FFFFFF20',
                        }}
                    >
                        <InputBox
                            label='From'
                            amount={amount}
                            onAmountChange={(amount) => setAmount(amount)}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                        />
                        <IconButton onClick={swapCurrencies}>
                            <img
                                src='/image/icon.png'
                                alt='icon'
                                style={{
                                    width: '2rem',
                                    height: 'auto',
                                    transform: `rotate(${rotation}deg)`,
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </IconButton>
                        <InputBox
                            label='To'
                            amount={convertedAmount}
                            onAmountChange={(amount) => setConvertedAmount(amount)}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
                            <Button
                                variant='contained'
                                color='info'
                                onClick={() => setConvertedAmount(amount * currencyInfo[to])}
                                sx={{ textTransform: 'none' }}
                            >
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default App
