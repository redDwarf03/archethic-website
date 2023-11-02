import React, { useEffect, useRef } from 'react'
import { useHomePageStore } from '@/app/home/Home'
import { useBreakpoints } from '@/utils/hooks/useBreakpoints'
import { findXPercentage } from '@/utils/maths'
import { Point, Points } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { mapRange } from 'gsap/gsap-core'
import * as THREE from 'three'
import { TextureLoader } from 'three'

const particleColors = ['#ECE9F6', '#B3A9DA', '#8C7DC7', '#4027A2', '#201844']

interface Particles {
  size?: number
}

const circleTexture = new TextureLoader().load('/canvas/texture-star.png')

function Particles({ size = 300 }: Particles) {
  const sections = useHomePageStore((state) => state.sections)
  const ref = useRef<THREE.Points>(null)
  const { width, height } = useThree((state) => state.viewport)
  const scrollProgress = useRef(0)
  const { isScreenSmall } = useBreakpoints()

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta / 110
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (!sections || !ref.current || isScreenSmall) {
        return null
      }

      let scroll = window.scrollY

      const sectionStart = 0
      const sectionEnd = sections.journeySectionsGroup.offsetTop
      scrollProgress.current = Math.floor(findXPercentage(scroll, sectionStart, sectionEnd))

      gsap.to(ref.current.position, {
        z: mapRange(0, 100, -15, -5, scrollProgress.current),
        duration: 2,
      })

      gsap.to(ref.current.rotation, {
        y: mapRange(0, 100, 0, 2, scrollProgress.current),
        duration: 1,
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections, isScreenSmall])

  return (
    <Points limit={size} ref={ref} position={[0, 15, -15]}>
      <pointsMaterial
        size={0.09}
        vertexColors
        map={circleTexture}
        alphaTest={0.5}
        transparent={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
      {Array.from({ length: size }).map((_, i) => (
        <Point
          key={i}
          position={[
            (0.5 - Math.random()) * width * 2,
            0.5 * height + Math.random() ** 0.25 * height * -3,
            (0.5 - Math.random()) * 25,
          ]}
          color={particleColors[Math.floor(Math.random() * (particleColors.length - 1))]}
        />
      ))}
    </Points>
  )
}

export { Particles }
