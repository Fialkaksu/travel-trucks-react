import EquipmentItem from '@components/EquipmentItem/EquipmentItem';

import css from './EquipmentList.module.css';

const EquipmentList = ({ equipment }) => {
  return (
    <ul className={css.equipmentList}>
      {equipment.map(({ icon, label }) => (
        <EquipmentItem
          key={label}
          icon={icon}
          label={label}
        />
      ))}
    </ul>
  )
}

export default EquipmentList