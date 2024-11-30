import React, { useState } from 'react'

export const SoundButton = ({ label, color, onClick, icon: Icon, isCategory }) => {
  const [isHovered, setIsHovered] = useState(false)

  const buttonStyle = {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '12px',
    background: `linear-gradient(135deg, ${color}15 0%, ${color}30 100%)`,
    border: `2px solid ${isHovered ? `${color}60` : `${color}40`}`,
    color: 'white',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative',
    transform: isHovered ? 'translateY(-2px)' : 'none',
    boxShadow: isHovered ? `0 5px 15px ${color}30` : 'none'
  }

  const iconStyle = {
    fontSize: '24px',
    filter: `drop-shadow(0 0 2px ${color})`
  }

  const labelStyle = {
    fontSize: '0.9rem',
    opacity: '0.9',
    textShadow: '0 0 10px rgba(0,0,0,0.5)'
  }

  const categoryIndicatorStyle = isCategory ? {
    content: '▶',
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    fontSize: '0.8rem',
    opacity: '0.8'
  } : null

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon && <div style={iconStyle}><Icon size={24} /></div>}
      <span style={labelStyle}>{label}</span>
      {isCategory && <span style={categoryIndicatorStyle}>▶</span>}
    </button>
  )
}
