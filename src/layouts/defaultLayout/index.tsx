// styles
import './style.scss'
import React, { ReactElement, ReactNode, useLayoutEffect, useRef, useState } from 'react'

// components
import { ContentWrapper } from 'components/contentWrapper'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

interface Props {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props): ReactElement => {
  const $el = useRef<HTMLDivElement>(null)
  const [mt, setMT] = useState(0)

  useLayoutEffect(() => {
    const { current } = $el

    function headerHeight(): number {
      const headerLayout = current?.querySelector('header')
      const headerHeight = headerLayout?.clientHeight

      return headerHeight ?? 0
    }

    setMT(headerHeight)

    function resize(): void {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      setTimeout(() => {
        if (
          windowHeight < window.innerHeight ||
          windowHeight > window.innerHeight ||
          windowWidth < window.innerWidth ||
          windowWidth > window.innerWidth
        ) {
          setMT(headerHeight)
        }
      }, 300)
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div ref={$el} className="default-layout">
      <Header />
      <ContentWrapper style={{ marginTop: mt }}>{children}</ContentWrapper>
      <Footer />
    </div>
  )
}

export default DefaultLayout
