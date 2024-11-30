import styled from 'styled-components'
import { SoundButton } from './SoundButton'

const CategoryContainer = styled.div`
  margin: 1rem 0;
`

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
`

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
`

const SoundGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  padding: 0 1rem;
  
  @media (min-width: 768px) and (orientation: landscape) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`

export const Category = ({ name, icon: Icon, sounds, onPlay }) => {
  return (
    <CategoryContainer>
      <CategoryHeader>
        {Icon && <Icon size={24} />}
        <CategoryTitle>{name}</CategoryTitle>
      </CategoryHeader>
      <SoundGrid>
        {sounds.map(sound => (
          <SoundButton
            key={sound.id}
            label={sound.label}
            color={sound.color}
            onClick={() => onPlay(sound.file)}
          />
        ))}
      </SoundGrid>
    </CategoryContainer>
  )
}
