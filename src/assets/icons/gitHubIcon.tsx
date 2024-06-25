import { memo } from 'react'

export const GitHubIcon = memo(() => (
  <svg height={'50px'} viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'}>
    <mask height={'24'} id={'lineMdGithubLoop0'} width={'24'} x={'0'} y={'0'}>
      <g fill={'#fff'}>
        <ellipse cx={'9.5'} cy={'9'} rx={'1.5'} ry={'1'}></ellipse>
        <ellipse cx={'14.5'} cy={'9'} rx={'1.5'} ry={'1'}></ellipse>
      </g>
    </mask>
    <g
      fill={'none'}
      stroke={'var(--color-info-700)'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'2'}
    >
      <path
        d={
          'M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21'
        }
        strokeDasharray={'30'}
        strokeDashoffset={'30'}
      >
        <animate
          attributeName={'stroke-dashoffset'}
          dur={'0.6s'}
          fill={'freeze'}
          values={'30;0'}
        ></animate>
      </path>
      <path d={'M9 19'} strokeDasharray={'10'} strokeDashoffset={'10'}>
        <animate
          attributeName={'stroke-dashoffset'}
          begin={'0.7s'}
          dur={'0.2s'}
          fill={'freeze'}
          values={'10;0'}
        ></animate>
        <animate
          attributeName={'d'}
          dur={'3s'}
          repeatCount={'indefinite'}
          values={
            'M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5'
          }
        ></animate>
      </path>
    </g>
    <rect
      fill={'var(--color-info-700)'}
      height={'4'}
      mask={'url(#lineMdGithubLoop0)'}
      width={'8'}
      x={'8'}
      y={'11'}
    >
      <animate
        attributeName={'y'}
        dur={'7s'}
        keyTimes={'0;0.45;0.46;0.54;0.55;1'}
        repeatCount={'indefinite'}
        values={'11;11;7;7;11;11'}
      ></animate>
    </rect>
  </svg>
))
