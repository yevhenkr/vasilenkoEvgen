import s from './titleSection.module.scss'
type TitleProps = {
  className?: string
  title: string
}

export const TitleSection = (props: TitleProps) => {
  return (
    <div className={s.title}>
      <h2 className={props.className ? props.className : ''}>{props.title}</h2>
    </div>
  )
}
