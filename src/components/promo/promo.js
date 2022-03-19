import logo from '../../recources/logo.png';
import timer from '../../recources/timer.png';
import hand from '../../recources/hand.png';
import messages from '../../recources/messages.png';


import './promo.scss';

const Promo = () => {
    return (
      <div className="promo">
        <div className="container">
        <header className="header">
           <a href="#" className="header__logo">
               <img src={logo} alt="logo" />
           </a>
            <div className="header__official">
                Официальный представитель 
            <span>Garmin, Polar, Suunto</span>
            </div>
            <div className="header__contact">
                <a href="tel:+74999228974" className='header__phone'>+7 (499) 922-89-74</a>
                <button className="button">заказать звонок</button>
            </div>
        </header>

        <div className="promo__wrapper">
              <h1 className="promo__header">Подбор пульсометра</h1>
              <h2 className="promo__subheader">с учётом Вашего уровня подготовки</h2>
                <div className="promo__icons">
                    <div className="promo__icon">
                        <img src={timer} alt="timer"/>
                        Время подбора:
                        10 минут
                    </div>                    

                    <div className="promo__icon">
                        <img src={hand} alt="hand"/>
                        Время подбора:
                        10 минут
                    </div>
                
                    <div className="promo__icon">
                        <img src={messages} alt="messages"/>
                        Время подбора:
                        10 минут
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Promo;