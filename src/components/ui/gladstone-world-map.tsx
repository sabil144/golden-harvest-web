
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface GladstoneWorldMapProps {
  lineColor?: string;
}

export function GladstoneWorldMap({
  lineColor = "#D4AF37",
}: GladstoneWorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const projectPoint = (lat: number, lng: number) => {
    // World map projection
    const x = ((lng + 180) / 360) * 1000;
    const y = ((90 - lat) / 180) * 500;
    return { x: Math.max(0, Math.min(1000, x)), y: Math.max(0, Math.min(500, y)) };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 60;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Export destinations with tonnage data
  const exportRoutes = [
    { country: "China", tonnage: "14.4mt", lat: 35.8617, lng: 104.1954 },
    { country: "Japan", tonnage: "23.4mt", lat: 36.2048, lng: 138.2529 },
    { country: "Korea", tonnage: "10.4mt", lat: 35.9078, lng: 127.7669 },
    { country: "Taiwan", tonnage: "3.1mt", lat: 23.6978, lng: 120.9605 },
    { country: "Indonesia", tonnage: "1.1mt", lat: -0.7893, lng: 113.9213 },
    { country: "India", tonnage: "13.6mt", lat: 20.5937, lng: 78.9629 },
    { country: "Russia", tonnage: "969kt", lat: 61.5240, lng: 105.3188 },
    { country: "Oman", tonnage: "656.9kt", lat: 21.4735, lng: 55.9754 },
    { country: "Brazil", tonnage: "1.8mt", lat: -14.2350, lng: -51.9253 },
  ];

  // Gladstone coordinates
  const gladstone = { lat: -23.8435, lng: 151.2589 };

  // Generate world map outline dots
  const generateWorldDots = () => {
    const dots = [];
    
    // Simplified world continent outlines
    const continents = [
      // Australia
      { centerLat: -25, centerLng: 133, radiusLat: 8, radiusLng: 12 },
      // Asia
      { centerLat: 30, centerLng: 100, radiusLat: 15, radiusLng: 25 },
      // Europe
      { centerLat: 54, centerLng: 15, radiusLat: 8, radiusLng: 15 },
      // Africa
      { centerLat: 0, centerLng: 20, radiusLat: 25, radiusLng: 15 },
      // North America
      { centerLat: 45, centerLng: -100, radiusLat: 20, radiusLng: 25 },
      // South America
      { centerLat: -15, centerLng: -60, radiusLat: 20, radiusLng: 15 },
    ];

    continents.forEach(continent => {
      for (let lat = continent.centerLat - continent.radiusLat; lat <= continent.centerLat + continent.radiusLat; lat += 3) {
        for (let lng = continent.centerLng - continent.radiusLng; lng <= continent.centerLng + continent.radiusLng; lng += 3) {
          const distance = Math.sqrt(
            Math.pow((lat - continent.centerLat) / continent.radiusLat, 2) + 
            Math.pow((lng - continent.centerLng) / continent.radiusLng, 2)
          );
          
          if (distance <= 1 && Math.random() > 0.4) {
            const point = projectPoint(lat, lng);
            dots.push({ x: point.x, y: point.y });
          }
        }
      }
    });

    return dots;
  };

  const worldDots = generateWorldDots();

  return (
    <div className="w-full aspect-[2/1] bg-gray-50 rounded-lg relative overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 500"
        className="w-full h-full absolute inset-0"
      >
        {/* Background dots for continents */}
        {worldDots.map((dot, i) => (
          <circle
            key={`bg-dot-${i}`}
            cx={dot.x}
            cy={dot.y}
            r="1"
            fill="#B0BEC5"
          />
        ))}

        {/* Export route lines */}
        {exportRoutes.map((route, i) => {
          const startPoint = projectPoint(gladstone.lat, gladstone.lng);
          const endPoint = projectPoint(route.lat, route.lng);
          return (
            <g key={`route-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={lineColor}
                strokeWidth="2.5"
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

        {/* Gladstone hub point */}
        <g>
          <circle
            cx={projectPoint(gladstone.lat, gladstone.lng).x}
            cy={projectPoint(gladstone.lat, gladstone.lng).y}
            r="6"
            fill={lineColor}
          />
          <circle
            cx={projectPoint(gladstone.lat, gladstone.lng).x}
            cy={projectPoint(gladstone.lat, gladstone.lng).y}
            r="6"
            fill={lineColor}
            opacity="0.6"
          >
            <animate
              attributeName="r"
              from="6"
              to="18"
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

        {/* Destination points */}
        {exportRoutes.map((route, i) => (
          <g key={`dest-${i}`}>
            <circle
              cx={projectPoint(route.lat, route.lng).x}
              cy={projectPoint(route.lat, route.lng).y}
              r="4"
              fill={lineColor}
            />
          </g>
        ))}

        {/* Country labels with tonnage */}
        {exportRoutes.map((route, i) => {
          const point = projectPoint(route.lat, route.lng);
          return (
            <g key={`label-${i}`}>
              <text
                x={point.x}
                y={point.y - 10}
                textAnchor="middle"
                className="text-xs font-medium fill-gray-700"
              >
                {route.country}
              </text>
              <text
                x={point.x}
                y={point.y + 20}
                textAnchor="middle"
                className="text-xs fill-gray-600"
              >
                {route.tonnage}
              </text>
            </g>
          );
        })}

        {/* Gladstone label */}
        <text
          x={projectPoint(gladstone.lat, gladstone.lng).x}
          y={projectPoint(gladstone.lat, gladstone.lng).y + 25}
          textAnchor="middle"
          className="text-sm font-bold fill-gray-800"
        >
          GLADSTONE
        </text>
        <text
          x={projectPoint(gladstone.lat, gladstone.lng).x}
          y={projectPoint(gladstone.lat, gladstone.lng).y - 15}
          textAnchor="middle"
          className="text-xs fill-gray-600"
        >
          Australia 3.6mt
        </text>
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
        <div className="flex items-center gap-2 mb-1">
          <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: lineColor }}></div>
          <span className="text-grain-green font-medium">Export Hub (Gladstone)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: lineColor }}></div>
          <span className="text-grain-earth">Export Destinations</span>
        </div>
      </div>
    </div>
  );
}
