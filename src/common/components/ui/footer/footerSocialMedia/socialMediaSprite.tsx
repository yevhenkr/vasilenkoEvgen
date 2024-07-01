import sprite from '@/assets/icons/sprite.svg'

type PropsType = {
  spriteId: string
  spriteId2?: string
  viewBox?: string
}
const SocialMediaSprite = (props: PropsType) => {
  return (
    <div>
      <a href={'https://t.me/VasilenkoEvgen'} rel={'noreferrer'} target={'_blank'}>
        <svg
          fill={'none'}
          height={'30'}
          viewBox={props.viewBox ? props.viewBox : '0 0 24 24'}
          width={'30'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <use xlinkHref={`${sprite}#${props.spriteId}`} />
          {props.spriteId2 ? <use xlinkHref={`${sprite}#${props.spriteId2}`} /> : ''}
          {}
        </svg>
      </a>
    </div>
  )
}

export default SocialMediaSprite
