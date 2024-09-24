export const getFilteredEquipment = ({
  transmission,
  engine,
  AC,
  bathroom,
  kitchen,
  radio,
  TV,
}) => {
  return [
    {
      icon: 'icon-automatic',
      label: 'Automatic',
      available: transmission === 'automatic',
    },
    { icon: 'icon-fuel', label: engine, available: engine },
    { icon: 'icon-kitchen', label: 'Kitchen', available: kitchen },
    { icon: 'icon-ac', label: 'AC', available: AC },
    { icon: 'icon-bathroom', label: 'Bathroom', available: bathroom },
    { icon: 'icon-radio', label: 'Radio', available: radio },
    { icon: 'icon-tv', label: 'TV', available: TV },
  ].filter(item => item.available);
};

export const formatString = str => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/^\w/, c => c.toUpperCase());
};

export const addSpaceToUnit = str => {
  return str.replace(/(\d+\.?\d*)([a-zA-Z]+)/, '$1 $2');
};

export const scrollToTheTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
