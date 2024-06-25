import { Link } from 'react-router-dom'

import { Button } from '@/common/components/ui/button'

// import gs from '../../../../app/app.module.scss'
// import s from './projectItem.module.scss'

import cards from '../../../../../assets/img/cards.png'

export const ProjectItem = () => {
  return (
    <div>
      <div>
        <img alt={'Cards'} className={''} src={cards} />
      </div>
      <div>
        <h3>Cards</h3>
        <span>
          The app is designed for question-and-answer card-based learning, with the ability to
          create your own decks of cards or use existing sets.
        </span>
        <div>
          <Button as={Link} to={'https://cards-for-study.vercel.app/login'} variant={'empty'}>
            Project
          </Button>
          <Button as={Link} to={'https://github.com/MrEvgeniy1989/cards'} variant={'empty'}>
            Code
          </Button>
        </div>
      </div>
    </div>
  )
}
