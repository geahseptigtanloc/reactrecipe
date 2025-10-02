import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [greeting, setGreeting] = useState('Welcome back!');
    
    const realusername = "admin";
    const realpassword = "admin123";
    
    useEffect(() => {
        if (username) {
            setGreeting(`Hi ${username}! 👋`);
        } else {
            setGreeting('Welcome back!');
        }
    }, [username]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === realusername && password === realpassword) {
            alert('You\'re in! Welcome back 😊');
            navigate('/Home');
        } else {
            alert('Hmm, that doesn\'t look right. Try again?');
        }
    }

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div style={{ maxWidth: '450px', width: '100%' }}>
                
                {/* Login Card */}
                <div style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '40px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>👤</div>
                        <h1 style={{ 
                            fontSize: '2rem', 
                            fontWeight: '700', 
                            color: '#2c3e50',
                            marginBottom: '8px'
                        }}>
                            Login
                        </h1>
                        <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>{greeting}</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ 
                                display: 'block', 
                                color: '#34495e', 
                                fontWeight: '600', 
                                marginBottom: '8px',
                                fontSize: '0.95rem'
                            }}>
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                placeholder="Enter your username"
                                required
                                maxLength={30}
                                onChange={(e) => setUsername(e.target.value)}
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

                        <div style={{ marginBottom: '25px' }}>
                            <label style={{ 
                                display: 'block', 
                                color: '#34495e', 
                                fontWeight: '600', 
                                marginBottom: '8px',
                                fontSize: '0.95rem'
                            }}>
                                Password
                            </label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    placeholder="Enter your password"
                                    required
                                    maxLength={30}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '12px 15px',
                                        paddingRight: '45px',
                                        border: '2px solid #e0e0e0',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        boxSizing: 'border-box',
                                        transition: 'border 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '12px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '1.2rem',
                                        padding: '5px'
                                    }}
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            style={{
                                width: '100%',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                border: 'none',
                                padding: '14px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: '1.05rem',
                                marginBottom: '12px',
                                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            Login
                        </button>

                        <button 
                            type="button"
                            onClick={() => navigate('/Home')}
                            style={{
                                width: '100%',
                                background: 'transparent',
                                color: '#7f8c8d',
                                border: '2px solid #e0e0e0',
                                padding: '12px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: '1rem'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.borderColor = '#667eea';
                                e.target.style.color = '#667eea';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.borderColor = '#e0e0e0';
                                e.target.style.color = '#7f8c8d';
                            }}
                        >
                            Back to Home
                        </button>
                    </form>

                    {/* Demo Info
                    <div style={{
                        marginTop: '25px',
                        padding: '15px',
                        background: '#f8f9fa',
                        borderRadius: '8px',
                        borderLeft: '4px solid #667eea'
                    }}>
                        <p style={{ 
                            fontSize: '0.85rem', 
                            color: '#7f8c8d', 
                            margin: '0 0 8px 0',
                            fontWeight: '600'
                        }}>
                            🔑 Test it out with:
                        </p>
                        <p style={{ fontSize: '0.85rem', color: '#95a5a6', margin: '3px 0' }}>
                            Username: <code style={{ background: 'white', padding: '2px 6px', borderRadius: '4px', color: '#2c3e50' }}>admin</code>
                        </p>
                        <p style={{ fontSize: '0.85rem', color: '#95a5a6', margin: '3px 0' }}>
                            Password: <code style={{ background: 'white', padding: '2px 6px', borderRadius: '4px', color: '#2c3e50' }}>admin123</code>
                        </p>
                    </div> */}
                </div>

                {/* Bottom Text */}
                <p style={{ 
                    textAlign: 'center', 
                    marginTop: '20px', 
                    color: 'white',
                    fontSize: '0.9rem'
                }}>
                    Don't have an account? <span style={{ fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' }}>Sign up</span>
                </p>
            </div>
        </div>
    );
}

export default Login;