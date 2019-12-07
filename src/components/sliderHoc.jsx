/**
 * Created by Tw93 on 2019-12-07.
 * 滑动输入组件
 */

import React from 'react';

export default p => (SliderComponent, RangeComponent) => {
  return class extends React.Component {
    render() {
      const { max, min, step } = p.schema;
      let setting = {};
      if (max || max === 0) {
        setting = { max };
      }

      if (min || min === 0) {
        setting = { ...setting, min };
      }

      if (step) {
        setting = { ...setting, step };
      }

      const onChange = value => {
        p.onChange(p.name, value);
      };

      return (
        <div className="fr-slider">
          <SliderComponent
            style={{ flexGrow: 1, marginRight: 12 }}
            {...setting}
            onChange={onChange}
            value={typeof p.value === 'number' ? p.value : min || 0}
          />
          <RangeComponent
            {...p.options}
            {...setting}
            style={{ width: '35%' }}
            value={p.value}
            disabled={p.disabled}
            readOnly={p.readonly}
            onChange={onChange}
          />
        </div>
      );
    }
  };
};
