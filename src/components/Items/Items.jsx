import { useState } from 'react';
import Menu from '../Menu/Menu';
import items from './items.module.css'

const Items = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={items.dropdown}>
      <section className={items.dropdpwn__section}>
        <h2 className={items["dropdown__section2--text"]}>Milhojas</h2>

        {
            isOpen === true
              ? (
                <>
                  <div className={items["dropdown__section2--line"]} style={{ width: '28%' }} />
                  <button type="submit" className={items["dropdown__Section1--button"]} onClick={toggleDropdown}>
                    <p className={items["dropdown__Section1--buttonText"]}>v</p>
                  </button>
                  <Menu />
                </>
              )
              : (
                <>
                  <div className={items["dropdown__section2--line"] }style={{ width: '78%' }} />
                  <button type="submit" className={items["dropdown__Section1--button"]} onClick={toggleDropdown}>
                    <p className={items["dropdown__Section1--buttonText"]}>{'>'}</p>
                  </button>
                </>
              )
      }
      </section>
    </section>
  );
};

export default Items;
