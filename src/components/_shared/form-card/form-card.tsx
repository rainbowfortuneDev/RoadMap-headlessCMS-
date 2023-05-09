import Box from '@mui/material/Box'

import styles from './form-card.module.scss'

type FormCardProps = {
  item: {
    id: any
    name: string
  }
  selectedItem?: any
}

function FormCard({ item, selectedItem }: FormCardProps) {
  return (
    <Box
      className={`${styles.formCard} ${
        selectedItem === item?.id ? styles.formCard__selected : ''
      }`}
    >
      <span className={styles.formCard__name}>{item.name}</span>
    </Box>
  )
}

export default FormCard
