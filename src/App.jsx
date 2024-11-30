import React, { useState } from 'react'
import { SoundButton } from './components/SoundButton'
import { soundConfig } from './config/sounds'
import { FaArrowLeft } from 'react-icons/fa'

function App() {
  const [currentPath, setCurrentPath] = useState([])
  const [lastPlayedId, setLastPlayedId] = useState(null)

  const containerStyle = {
    margin: 0,
    padding: 0,
    color: 'white',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
    minHeight: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0
  }

  const contentStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px'
  }

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    padding: '1rem',
    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.1)'
  }

  const titleStyle = {
    fontSize: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
    margin: 0
  }

  const backButtonStyle = {
    background: 'rgba(0, 255, 255, 0.1)',
    border: 'none',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '1.5rem',
    padding: '1rem'
  }

  const getCurrentItems = () => {
    let items = soundConfig.sounds
    for (const pathId of currentPath) {
      const category = items.find(item => item.id === pathId)
      if (category && category.items) {
        items = category.items
      }
    }
    return items
  }

  const getCurrentTitle = () => {
    if (currentPath.length === 0) return 'Soundboard'
    const lastCategory = getCurrentItems().find(item => item.id === currentPath[currentPath.length - 1])
    return lastCategory ? lastCategory.label : 'Soundboard'
  }

  const handleItemClick = (item) => {
    if (item.type === 'category') {
      setCurrentPath([...currentPath, item.id])
    } else {
      const audio = new Audio(item.file)
      audio.play().catch(error => {
        console.error('Error playing sound:', error)
      })
      setLastPlayedId(item.id)
      setTimeout(() => setLastPlayedId(null), 2000)
    }
  }

  const handleBack = () => {
    setCurrentPath(currentPath.slice(0, -1))
  }

  const items = getCurrentItems()

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <header style={headerStyle}>
          {currentPath.length > 0 && (
            <button style={backButtonStyle} onClick={handleBack}>
              <FaArrowLeft />
            </button>
          )}
          <h1 style={titleStyle}>{getCurrentTitle()}</h1>
        </header>
        <div style={gridStyle}>
          {items.map(item => (
            <SoundButton
              key={item.id}
              label={item.label}
              color={item.color}
              icon={item.icon}
              isCategory={item.type === 'category'}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
