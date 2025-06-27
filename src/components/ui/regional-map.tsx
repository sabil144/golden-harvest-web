
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface RegionalMapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function RegionalMap({
  dots = [],
  lineColor = "#D4AF37",
}: RegionalMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const projectPoint = (lat: number, lng: number) => {
    // Adjusted projection for Australia-Asia region
    // Longitude range: 90° to 180° (Asia-Pacific region)
    // Latitude range: -50° to 50° (covers Australia to North Asia)
    const x = ((lng - 90) / 90) * 800; // Map lng 90-180 to x 0-800
    const y = ((50 - lat) / 100) * 400; // Map lat 50 to -50 to y 0-400
    return { x: Math.max(0, Math.min(800, x)), y: Math.max(0, Math.min(400, y)) };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 40;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Regional dotted pattern for Australia-Asia region
  const generateRegionalDots = () => {
    const dots = [];
    const spacing = 8;
    
    // Define rough outlines for countries in the region
    const regions = [
      // Australia outline (simplified)
      { centerLat: -25, centerLng: 133, radiusLat: 10, radiusLng: 15 },
      // Japan
      { centerLat: 36, centerLng: 138, radiusLat: 4, radiusLng: 3 },
      // China (eastern coast)
      { centerLat: 35, centerLng: 115, radiusLat: 8, radiusLng: 8 },
      // Southeast Asia
      { centerLat: 10, centerLng: 110, radiusLat: 6, radiusLng: 8 },
      // Korea
      { centerLat: 37, centerLng: 127, radiusLat: 2, radiusLng: 1.5 },
      // India (partial - eastern regions)
      { centerLat: 20, centerLng: 80, radiusLat: 6, radiusLng: 4 },
    ];

    regions.forEach(region => {
      for (let lat = region.centerLat - region.radiusLat; lat <= region.centerLat + region.radiusLat; lat += 2) {
        for (let lng = region.centerLng - region.radiusLng; lng <= region.centerLng + region.radiusLng; lng += 2) {
          const distance = Math.sqrt(
            Math.pow((lat - region.centerLat) / region.radiusLat, 2) + 
            Math.pow((lng - region.centerLng) / region.radiusLng, 2)
          );
          
          if (distance <= 1 && Math.random() > 0.3) {
            const point = projectPoint(lat, lng);
            if (point.x >= 0 && point.x <= 800 && point.y >= 0 && point.y <= 400) {
              dots.push({ x: point.x, y: point.y });
            }
          }
        }
      }
    });

    return dots;
  };

  const regionalDots = generateRegionalDots();

  return (
    <div className="w-full aspect-[2/1] bg-gray-50 rounded-lg relative overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0"
      >
        {/* Background dots for landmasses */}
        {regionalDots.map((dot, i) => (
          <circle
            key={`bg-dot-${i}`}
            cx={dot.x}
            cy={dot.y}
            r="0.8"
            fill="#00000020"
          />
        ))}

        {/* Trade route lines */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="2"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Start and end points with pulsing animation */}
        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {/* Start point (Australia) */}
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="4"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="4"
                fill={lineColor}
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  from="4"
                  to="12"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            {/* End points (Asian markets) */}
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="3"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.4"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="8"
                  dur="1.8s"
                  begin={`${0.2 * i}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.4"
                  to="0"
                  dur="1.8s"
                  begin={`${0.2 * i}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
        <div className="flex items-center gap-2 mb-1">
          <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: lineColor }}></div>
          <span className="text-grain-green font-medium">Australia (Export Hub)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: lineColor }}></div>
          <span className="text-grain-earth">Asian Markets</span>
        </div>
      </div>
    </div>
  );
}
