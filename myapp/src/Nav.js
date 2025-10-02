import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '3px solid #f39c12'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
      }}>
        
        {/* Logo/Brand */}
        <NavLink 
          to="/Home"
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#2c3e50',
            textDecoration: 'none',
            fontFamily: 'Georgia, serif',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={(e) => e.target.style.color = '#3498db'}
          onMouseOut={(e) => e.target.style.color = '#2c3e50'}
        >
          <span style={{ fontSize: '1.8rem' }}>✨</span>
          Geah Sept Igtanloc
        </NavLink>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }} className="desktop-menu">
          <NavLink
            to="/Home"
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: location.pathname === '/Home' ? 'white' : '#546e7a',
              background: location.pathname === '/Home' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
              fontWeight: location.pathname === '/Home' ? '600' : '500',
              fontSize: '0.95rem',
              transition: 'all 0.2s',
              boxShadow: location.pathname === '/Home' ? '0 2px 8px rgba(102, 126, 234, 0.3)' : 'none'
            }}
            onMouseOver={(e) => {
              if (location.pathname !== '/Home') {
                e.target.style.background = '#f8f9fa';
                e.target.style.color = '#2c3e50';
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== '/Home') {
                e.target.style.background = 'transparent';
                e.target.style.color = '#546e7a';
              }
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/Portfolio"
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: location.pathname === '/Portfolio' ? 'white' : '#546e7a',
              background: location.pathname === '/Portfolio' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
              fontWeight: location.pathname === '/Portfolio' ? '600' : '500',
              fontSize: '0.95rem',
              transition: 'all 0.2s',
              boxShadow: location.pathname === '/Portfolio' ? '0 2px 8px rgba(102, 126, 234, 0.3)' : 'none'
            }}
            onMouseOver={(e) => {
              if (location.pathname !== '/Portfolio') {
                e.target.style.background = '#f8f9fa';
                e.target.style.color = '#2c3e50';
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== '/Portfolio') {
                e.target.style.background = 'transparent';
                e.target.style.color = '#546e7a';
              }
            }}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/Calculator"
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: location.pathname === '/Calculator' ? 'white' : '#546e7a',
              background: location.pathname === '/Calculator' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
              fontWeight: location.pathname === '/Calculator' ? '600' : '500',
              fontSize: '0.95rem',
              transition: 'all 0.2s',
              boxShadow: location.pathname === '/Calculator' ? '0 2px 8px rgba(102, 126, 234, 0.3)' : 'none'
            }}
            onMouseOver={(e) => {
              if (location.pathname !== '/Calculator') {
                e.target.style.background = '#f8f9fa';
                e.target.style.color = '#2c3e50';
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== '/Calculator') {
                e.target.style.background = 'transparent';
                e.target.style.color = '#546e7a';
              }
            }}
          >
            Calculator
          </NavLink>

          <NavLink
            to="/Recipe"
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: location.pathname === '/Recipe' ? 'white' : '#546e7a',
              background: location.pathname === '/Recipe' ? 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)' : 'transparent',
              fontWeight: location.pathname === '/Recipe' ? '600' : '500',
              fontSize: '0.95rem',
              transition: 'all 0.2s',
              boxShadow: location.pathname === '/Recipe' ? '0 2px 8px rgba(243, 156, 18, 0.3)' : 'none'
            }}
            onMouseOver={(e) => {
              if (location.pathname !== '/Recipe') {
                e.target.style.background = '#f8f9fa';
                e.target.style.color = '#2c3e50';
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== '/Recipe') {
                e.target.style.background = 'transparent';
                e.target.style.color = '#546e7a';
              }
            }}
          >
            Recipe
          </NavLink>

          <NavLink
            to="/Login"
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: location.pathname === '/Login' ? 'white' : '#546e7a',
              background: location.pathname === '/Login' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
              fontWeight: location.pathname === '/Login' ? '600' : '500',
              fontSize: '0.95rem',
              transition: 'all 0.2s',
              border: location.pathname === '/Login' ? 'none' : '2px solid #e0e0e0',
              boxShadow: location.pathname === '/Login' ? '0 2px 8px rgba(102, 126, 234, 0.3)' : 'none'
            }}
            onMouseOver={(e) => {
              if (location.pathname !== '/Login') {
                e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                e.target.style.color = 'white';
                e.target.style.border = 'none';
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== '/Login') {
                e.target.style.background = 'transparent';
                e.target.style.color = '#546e7a';
                e.target.style.border = '2px solid #e0e0e0';
              }
            }}
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.8rem',
            cursor: 'pointer',
            padding: '5px',
            color: '#2c3e50'
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown
      {isOpen && (
        <div style={{
          background: 'white',
          borderTop: '1px solid #f0f0f0',
          padding: '20px'
        }} className="mobile-menu">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <NavLink
              to="/Home"
              onClick={() => setIsOpen(false)}
              style={{
                padding: '12px 18px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: location.pathname === '/Home' ? 'white' : '#546e7a',
                background: location.pathname === '/Home' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f8f9fa',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/Portfolio"
              onClick={() => setIsOpen(false)}
              style={{
                padding: '12px 18px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: location.pathname === '/Portfolio' ? 'white' : '#546e7a',
                background: location.pathname === '/Portfolio' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f8f9fa',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/Calculator"
              onClick={() => setIsOpen(false)}
              style={{
                padding: '12px 18px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: location.pathname === '/Calculator' ? 'white' : '#546e7a',
                background: location.pathname === '/Calculator' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f8f9fa',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              Calculator
            </NavLink>
            <NavLink
              to="/Recipe"
              onClick={() => setIsOpen(false)}
              style={{
                padding: '12px 18px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: location.pathname === '/Recipe' ? 'white' : '#546e7a',
                background: location.pathname === '/Recipe' ? 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)' : '#f8f9fa',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              Recipe
            </NavLink>
            <NavLink
              to="/Login"
              onClick={() => setIsOpen(false)}
              style={{
                padding: '12px 18px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: location.pathname === '/Login' ? 'white' : '#546e7a',
                background: location.pathname === '/Login' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f8f9fa',
                fontWeight: '600',
                fontSize: '1rem',
                border: location.pathname === '/Login' ? 'none' : '2px solid #667eea'
              }}
            >
              Login
            </NavLink>
          </div>
        </div>
      )} */}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}

export default Nav;