import { 
  FaVolumeUp, 
  FaBomb, 
  FaBaby, 
  FaToilet,
  FaWindowRestore,
  FaComment,
  FaFolder
} from 'react-icons/fa'

export const soundConfig = {
  sounds: [
    {
      id: 'effects',
      type: 'category',
      label: 'Effekte',
      color: '#2196F3',
      icon: FaFolder,
      items: [
        {
          id: 'airhorn',
          type: 'sound',
          label: 'Airhorn',
          file: '/sounds/air-horn-sound-effect.mp3',
          color: '#E91E63',
          icon: FaBomb
        },
        {
          id: 'baby-laugh',
          type: 'sound',
          label: 'Baby Lachen',
          file: '/sounds/baby-laughing.mp3',
          color: '#FF9800',
          icon: FaBaby
        }
      ]
    },
    {
      id: 'memes',
      type: 'category',
      label: 'Memes',
      color: '#4CAF50',
      icon: FaFolder,
      items: [
        {
          id: 'kurz-kacken',
          type: 'sound',
          label: 'Kurz Kacken',
          file: '/sounds/kurz-kacken.mp3',
          color: '#795548',
          icon: FaToilet
        },
        {
          id: 'na-hor-mal',
          type: 'sound',
          label: 'Na hör mal',
          file: '/sounds/na-hor-mal.mp3',
          color: '#9C27B0',
          icon: FaComment
        }
      ]
    },
    {
      id: 'windows',
      type: 'sound',
      label: 'Windows XP',
      file: '/sounds/windows-xp-startup.mp3',
      color: '#2196F3',
      icon: FaWindowRestore
    }
  ]
}
