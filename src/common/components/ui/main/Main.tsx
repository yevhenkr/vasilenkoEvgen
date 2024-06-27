import gs from '../../../../app/app.module.scss'
import s from './main.module.scss'

import my from '../../../../assets/img/myPhoto.jpg'

export const Main = () => {
  return (
    <section className={`${gs.container} ${s.mainContainer}`} id={'Main'}>
      <div className={s.title}>
        <h2>I am Vasilenko Evgen</h2>
        <h3>WEB Developer</h3>
      </div>
      <div>
        <img className={s.img} src={my} />
      </div>
    </section>
  )
}
