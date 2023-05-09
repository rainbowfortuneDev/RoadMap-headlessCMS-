import Image from 'next/image'
import { useCity } from '../../../utils/city/city-context'
import Link from '../link/link'
import styles from './category-card.module.scss'

type CategoryCardProps = {
  category: {
    id: number
    name: string
    sub_categories: {
      id: number
    }[]
  }
  disableLink?: boolean
}

function CategoryCard({ category, disableLink }: CategoryCardProps) {
  const { zipAndCity } = useCity()
  return (
    <Link
      className={styles.categoryCard}
      href={
        disableLink
          ? '/'
          : zipAndCity
          ? `/posts/${zipAndCity.city.name.toLowerCase()}-${zipAndCity.city.state_code.toLowerCase()}/${
              zipAndCity.city.alt_id
            }/${zipAndCity.latitude}/${encodeURIComponent(
              zipAndCity.longitude
            )}/${category.name}/1`
          : '/'
      }
      variant="body2"
    >
      <div className={styles.categoryImg}>
        <Image
          alt={`${category.name} Icon`}
          src={require(`../../../assets/images/category/${category.id}.jpg`)}
          objectFit="cover"
          //layout="fixed"
          width={130}
          height={161}
          //sizes="148px"
          //priority
        />
      </div>
      {/* <Image
        className={styles.categoryCard__icon}
        alt={`${category.name} Icon`}
        src={`https://uploads.1stkare.com/category-icons/${category.id}.svg`}
        layout="fixed"
        width={48}
        height={48}
        sizes="48px"
        priority
      /> */}

      <div className={styles.categoryCardName}>
        <span className={styles.categoryCard__name}>{category.name}</span>
      </div>
    </Link>
  )
}

export default CategoryCard
