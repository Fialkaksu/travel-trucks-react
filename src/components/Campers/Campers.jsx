import CamperList from "@components/CamperList/CamperList"
import Button from "@components/Button/Button"

import css from './Campers.module.css'

const Campers = () => {
  return (
    <div className={css.container}>
      <CamperList />
      <Button variant='outlined'>Load more</Button>
    </div>
  )
}

export default Campers