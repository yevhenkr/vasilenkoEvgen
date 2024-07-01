import iconsSprite from '../../../../assets/icons/sprite.svg'

type PropsType = {
  height?: string
  iconId: string
  viewBox?: string
  weight?: string
}
export const Icon = (props: PropsType) => {
  return (
    <svg
      fill={'none'}
      height={props.height || '30'}
      viewBox={props.viewBox || '0 0 24 24'}
      width={props.weight || '30'}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
