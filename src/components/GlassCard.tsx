import { LiquidGlass } from 'liquid-glass-web-react'

export function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <LiquidGlass
      className={`glass-lens ${className}`}
      x={0.92}
      y={0.12}
      width={96}
      height={76}
      radius={28}
      strength={0.025}
      chromaticAberration={0.05}
      blur={0}
      depth={9}
      curvature={0.72}
      glow={0.08}
      edgeHighlight={0.18}
      specular={0.4}
      quality={256}
      shadow={false}
    >
      {children}
    </LiquidGlass>
  )
}
