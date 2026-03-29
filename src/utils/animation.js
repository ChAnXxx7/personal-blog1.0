import { useState, useEffect, useRef } from 'react'

export const useFadeIn = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    delay = 0
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible, delay }
}

export const useStaggeredFadeIn = (itemCount, options = {}) => {
  const { threshold = 0.1, baseDelay = 100 } = options
  const [visibleItems, setVisibleItems] = useState([])
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i])
            }, i * baseDelay)
          }
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [itemCount, threshold, baseDelay])

  return { ref, visibleItems }
}
