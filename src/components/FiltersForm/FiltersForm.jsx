import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import Button from '@components/Button/Button';
import Icon from '@components/Icon/Icon';
import { changeFilter } from '@redux/filters/slice';
import { scrollToTheTop } from '@utils/utils';

import css from './FiltersForm.module.css';

const INITIAL_VALUES = {
  location: '',
  equipment: [],
  vehicleType: '',
};

const EQUIPMENT_OPTIONS = [
  { label: 'AC', value: 'AC', icon: 'icon-ac' },
  { label: 'Automatic', value: 'automatic', icon: 'icon-automatic' },
  { label: 'Kitchen', value: 'kitchen', icon: 'icon-kitchen' },
  { label: 'TV', value: 'TV', icon: 'icon-tv' },
  { label: 'Bathroom', value: 'bathroom', icon: 'icon-bathroom' },
];

const VEHICLE_TYPE_OPTIONS = [
  { label: 'Van', value: 'panelTruck', icon: 'icon-van' },
  {
    label: 'Fully Integrated',
    value: 'fullyIntegrated',
    icon: 'icon-fully-integrated',
  },
  { label: 'Alcove', value: 'alcove', icon: 'icon-alcove' },
];

const FiltersForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(changeFilter(values));
    scrollToTheTop();
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.location}>
            <label htmlFor="location" className={css.locationLabel}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <Icon name="icon-map" className="iconMap" />
              <Field
                type="text"
                id="location"
                name="location"
                placeholder="City"
                className={css.locationInput}
                aria-label="Location"
              />
            </div>
          </div>

          <h3 className={css.title}>Filters</h3>

          <div className={css.equipment}>
            <h4 className={css.subTitle}>Vehicle equipment</h4>
            <hr className={css.separator} />
            <div className={css.equipmentOptions}>
              {EQUIPMENT_OPTIONS.map(option => (
                <label key={option.value} className={css.equipmentLabel}>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value={option.value}
                    checked={values.equipment.includes(option.value)}
                    className={css.checkbox}
                    onChange={() =>
                      setFieldValue(
                        'equipment',
                        values.equipment.includes(option.value)
                          ? values.equipment.filter(
                              item => item !== option.value
                            )
                          : [...values.equipment, option.value]
                      )
                    }
                    aria-label={option.label}
                  />
                  <Icon name={option.icon} />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <div className={css.vehicleType}>
            <h4 className={css.subTitle}>Vehicle type</h4>
            <hr className={css.separator} />
            <div className={css.vehicleTypeOptions}>
              {VEHICLE_TYPE_OPTIONS.map(option => (
                <label key={option.value} className={css.vehicleTypeLabel}>
                  <Field
                    type="radio"
                    name="vehicleType"
                    value={option.value}
                    className={css.radioButton}
                    aria-label={option.label}
                  />
                  <Icon name={option.icon} />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          <Button type="submit" aria-label="Search">
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FiltersForm;
