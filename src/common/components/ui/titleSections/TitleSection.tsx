import s from './titleSection.module.scss'
type TitleProps = {
  title: string
}

export const TitleSection = (props: TitleProps) => {
  return (
    <div className={s.title}>
      <h2>{props.title}</h2>
    </div>
  )
}
