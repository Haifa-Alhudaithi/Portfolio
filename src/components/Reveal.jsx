import { useReveal } from '../useReveal.js'

export default function Reveal({ children }) {
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal--visible' : ''}`}>
      {children}
    </div>
  )
}