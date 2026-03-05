import React, { useState } from 'react'
import { InfographicItem } from '../types'

interface InteractiveInfographicProps {
  items: InfographicItem[]
}

/* ---------------- SVG HELPERS ---------------- */

const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

const describeArc = (
  x: number,
  y: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
) => {
  const start = polarToCartesian(x, y, outerRadius, endAngle)
  const end = polarToCartesian(x, y, outerRadius, startAngle)
  const start2 = polarToCartesian(x, y, innerRadius, endAngle)
  const end2 = polarToCartesian(x, y, innerRadius, startAngle)

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  return [
    'M',
    start.x,
    start.y,
    'A',
    outerRadius,
    outerRadius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    'L',
    end2.x,
    end2.y,
    'A',
    innerRadius,
    innerRadius,
    0,
    largeArcFlag,
    1,
    start2.x,
    start2.y,
    'Z',
  ].join(' ')
}

/* ---------------- COMPONENT ---------------- */

export const InteractiveInfographic: React.FC<
  InteractiveInfographicProps
> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  if (!items || items.length === 0) return null

  const activeIndex = hoveredIndex !== null ? hoveredIndex : 0

  /* ---------- SVG CONFIG ---------- */

  const size = 600
  const center = size / 2

  // Slightly larger circle for better balance
  const outerRadius = 250
  const innerRadius = 155
  const gap = 4
  const segmentAngle = 360 / items.length

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full max-w-7xl mx-auto px-6 py-10">
      {/* ================= LEFT: RADIAL ================= */}

      <div className="relative w-full max-w-[480px] aspect-square flex-shrink-0">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F4037" />
              <stop offset="100%" stopColor="#1F4037" />
            </linearGradient>

            <linearGradient id="segmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          {/* Outer subtle ring */}
          <circle
            cx={center}
            cy={center}
            r={outerRadius + 20}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Inner white hub */}
          <circle
            cx={center}
            cy={center}
            r={innerRadius - 10}
            fill="white"
          />

          {/* Central Content */}
          <foreignObject
            x={center - 110}
            y={center - 110}
            width="220"
            height="220"
          >
            <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
              <div className="text-xs font-semibold tracking-widest text-brand-600 mb-2">
                SKILL {activeIndex + 1}
              </div>

              <h4 className="font-black text-xl leading-tight text-slate-900">
                {items[activeIndex].title}
              </h4>

              <p className="text-sm text-slate-500 mt-3 leading-snug">
                {items[activeIndex].description}
              </p>
            </div>
          </foreignObject>

          {/* Segments */}
          {items.map((item, index) => {
            const startAngle = index * segmentAngle + gap / 2
            const endAngle = (index + 1) * segmentAngle - gap / 2
            const isActive = activeIndex === index

            const labelRadius =
              innerRadius + (outerRadius - innerRadius) / 2
            const midAngle = startAngle + segmentAngle / 2
            const labelPos = polarToCartesian(
              center,
              center,
              labelRadius,
              midAngle
            )

            return (
              <g
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                className="cursor-pointer"
              >
                <path
                  d={describeArc(
                    center,
                    center,
                    innerRadius,
                    isActive ? outerRadius + 15 : outerRadius,
                    startAngle,
                    endAngle
                  )}
                  fill={isActive ? 'url(#activeGrad)' : 'url(#segmentGrad)'}
                  stroke={isActive ? '#FDB827' : '#e2e8f0'}
                  strokeWidth={isActive ? 3 : 1}
                  className="transition-all duration-500"
                />

                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`text-xl font-bold ${isActive
                      ? 'fill-white'
                      : 'fill-slate-500'
                    }`}
                >
                  {index + 1}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* ================= RIGHT: LIST ================= */}

      <div className="flex-1 w-full max-w-xl">
        <div className="mb-6">
          <h3 className="text-2xl font-black text-slate-900 mb-2 dark:text-secondary-600">
            Key Competencies
          </h3>
          <p className="text-sm text-slate-500">
            Master these core skills designed to make you
            industry-ready.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {items.map((item, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                className={`flex items-start gap-4 px-4 py-3 rounded-xl border-2 transition-all duration-300 cursor-pointer shadow-premium
                  ${isActive
                    ? 'bg-white border-brand-500 shadow-xl scale-[1.02]'
                    : 'bg-white border-brand-100 dark:bg-slate-900 dark:border-brand-900/50 hover:border-brand-300'
                  }
                `}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition
                    ${isActive
                      ? 'bg-brand-600 text-white'
                      : 'bg-white border text-slate-400'
                    }
                  `}
                >
                  {index + 1}
                </div>

                <div>
                  <h4
                    className={`font-semibold text-base ${isActive
                        ? 'text-slate-900'
                        : 'text-slate-600'
                      }`}
                  >
                    {item.title}
                  </h4>

                  {isActive && (
                    <p className="text-sm text-slate-500 mt-1 leading-snug">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
