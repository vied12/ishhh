import { useRouter } from 'next/router'
import DetailsC from '../../components/Details'

const Details = () => {
  const router = useRouter()
  const { pid } = router.query

  return <DetailsC itemId={pid} />
}

export default Details
