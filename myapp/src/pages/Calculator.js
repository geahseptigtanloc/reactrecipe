import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Calculator() {
    const navigate = useNavigate();
    const [firstDigit, setFirstDigit] = useState('');
    const [secondDigit, setSecondDigit] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(0);
    
    useEffect(() => {
        let total = 0;
        const num1 = parseFloat(firstDigit) || 0;
        const num2 = parseFloat(secondDigit) || 0;

        if (operation === '+') {
            total = num1 + num2;
        } else if (operation === '-') {
            total = num1 - num2;
        } else if (operation === '*') {
            total = num1 * num2;
        } else if (operation === '/') {
            total = num2 !== 0 ? num1 / num2 : 'Oops! Can\'t divide by zero';
        } else if (operation === '%') {
            total = num1 % num2;
        }
        
        setResult(total);
    }, [firstDigit, secondDigit, operation]);

    const clearAll = () => {
        setFirstDigit('');
        setSecondDigit('');
        setOperation('+');
        setResult(0);
    }

    return (
        <div style={{ minHeight: '100vh', background: '#ecf0f1', padding: '40px 20px' }}>
            <div style={{ maxWidth: '550px', margin: '0 auto' }}>
                
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '700', 
                        color: '#2c3e50',
                        marginBottom: '8px',
                        fontFamily: 'Georgia, serif'
                    }}>
                        Quick Calculator
                    </h1>
                    <p style={{ color: '#7f8c8d', fontSize: '1rem' }}>
                        Does the math so you don't have to
                    </p>
                </div>

                {/* Calculator Card */}
                <div style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '35px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                    {/* Result Display */}
                    <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '10px',
                        padding: '25px',
                        marginBottom: '30px',
                        textAlign: 'right'
                    }}>
                        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: '8px' }}>
                            Result
                        </div>
                        <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: '700' }}>
                            {typeof result === 'number' ? result.toFixed(2) : result}
                        </div>
                    </div>

                    {/* Inputs */}
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ 
                            display: 'block', 
                            color: '#34495e', 
                            fontWeight: '600', 
                            marginBottom: '8px',
                            fontSize: '0.95rem'
                        }}>
                            First Number
                        </label>
                        <input
                            type="number"
                            value={firstDigit}
                            placeholder="Type a number..."
                            onChange={(e) => setFirstDigit(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                boxSizing: 'border-box',
                                transition: 'border 0.3s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#667eea'}
                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ 
                            display: 'block', 
                            color: '#34495e', 
                            fontWeight: '600', 
                            marginBottom: '8px',
                            fontSize: '0.95rem'
                        }}>
                            Pick Operation
                        </label>
                        <select
                            value={operation}
                            onChange={(e) => setOperation(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                boxSizing: 'border-box',
                                cursor: 'pointer',
                                background: 'white'
                            }}
                        >
                            <option value="+">+ Add</option>
                            <option value="-">− Subtract</option>
                            <option value="*">× Multiply</option>
                            <option value="/">÷ Divide</option>
                            <option value="%">% Remainder</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <label style={{ 
                            display: 'block', 
                            color: '#34495e', 
                            fontWeight: '600', 
                            marginBottom: '8px',
                            fontSize: '0.95rem'
                        }}>
                            Second Number
                        </label>
                        <input
                            type="number"
                            value={secondDigit}
                            placeholder="Type another number..."
                            onChange={(e) => setSecondDigit(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                border: '2px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                boxSizing: 'border-box',
                                transition: 'border 0.3s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#667eea'}
                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                        />
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            onClick={clearAll}
                            style={{
                                flex: 1,
                                background: '#95a5a6',
                                color: 'white',
                                border: 'none',
                                padding: '14px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: '1rem'
                            }}
                            onMouseOver={(e) => e.target.style.background = '#7f8c8d'}
                            onMouseOut={(e) => e.target.style.background = '#95a5a6'}
                        >
                            Clear
                        </button>
                        <button
                            onClick={() => navigate('/Home')}
                            style={{
                                flex: 1,
                                background: '#667eea',
                                color: 'white',
                                border: 'none',
                                padding: '14px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: '1rem'
                            }}
                            onMouseOver={(e) => e.target.style.background = '#5568d3'}
                            onMouseOut={(e) => e.target.style.background = '#667eea'}
                        >
                            Home
                        </button>
                    </div>
                </div>

                {/* Tip Box */}
                <div style={{
                    marginTop: '25px',
                    background: 'white',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>
                    <p style={{ 
                        color: '#7f8c8d', 
                        fontSize: '0.9rem', 
                        margin: 0,
                        lineHeight: '1.6'
                    }}>
                        <strong style={{ color: '#34495e' }}>Tip:</strong> The answer updates automatically as you type. 
                        Try it with decimals too. It works with those!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Calculator;