import React, {
  ButtonHTMLAttributes,
  ComponentType,
  FC,
  HTMLAttributes,
  ReactNode,
} from 'react'
import cn from 'classnames'

import { LoadingDots } from '@components/ui'
import s from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  isLoading?: boolean
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>
  href?: string
}

const Button: FC<Props> = ({
  children,
  className,
  isLoading = false,
  Component = 'button',
  ...rest
}) => {
  const rootClassName = cn(s.root, className, {
    [s.loading]: isLoading,
  })

  return (
    <Component type='button' className={rootClassName} {...rest}>
      {children}
      &nbsp;
      {isLoading && (
        <i className='pl-2 m-0 flex'>
          <LoadingDots />
        </i>
      )}
    </Component>
  )
}

export default Button
