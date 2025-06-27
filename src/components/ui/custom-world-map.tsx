import React from 'react';

interface CustomMapProps {
  routes?: Array<{
    destination: string;
    coordinates: { x: number; y: number };
  }>;
}

export function CustomWorldMap({ routes = [] }: CustomMapProps) {
  // Australia's position on the map
  const australiaPosition = { x: 85, y: 70 };
  
  const defaultRoutes = [
    { destination: "Japan", coordinates: { x: 90, y: 35 } },
    { destination: "China", coordinates: { x: 80, y: 30 } },
    { destination: "South Korea", coordinates: { x: 88, y: 32 } },
    { destination: "Vietnam", coordinates: { x: 75, y: 45 } },
    { destination: "Thailand", coordinates: { x: 72, y: 48 } },
    { destination: "India", coordinates: { x: 65, y: 45 } },
    { destination: "Malaysia", coordinates: { x: 75, y: 52 } },
    { destination: "Singapore", coordinates: { x: 76, y: 53 } },
  ];

  const routesToShow = routes.length > 0 ? routes : defaultRoutes;

  return (
    <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
      {/* World Map SVG Background */}
      <svg
        viewBox="0 0 100 60"
        className="w-full h-full"
        style={{ background: '#f3f4f6' }}
      >
        {/* Simplified world map paths */}
        <g fill="#d1d5db" stroke="#9ca3af" strokeWidth="0.1">
          {/* Australia */}
          <path d="M 80 65 L 90 65 L 92 70 L 88 75 L 82 74 L 80 70 Z" fill="#fbbf24" />
          
          {/* Asia continent simplified */}
          <path d="M 60 20 L 95 20 L 95 50 L 85 55 L 75 55 L 65 50 L 60 35 Z" />
          
          {/* Other continents (simplified) */}
          <path d="M 5 25 L 25 25 L 25 55 L 5 55 Z" /> {/* Americas */}
          <path d="M 30 25 L 55 25 L 55 55 L 30 55 Z" /> {/* Europe/Africa */}
        </g>

        {/* Export routes from Australia */}
        <g>
          {routesToShow.map((route, index) => (
            <g key={index}>
              {/* Dotted line from Australia to destination */}
              <line
                x1={australiaPosition.x}
                y1={australiaPosition.y}
                x2={route.coordinates.x}
                y2={route.coordinates.y}
                stroke="#d4af37"
                strokeWidth="0.3"
                strokeDasharray="0.5,0.5"
                opacity="0.8"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-2"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </line>
              
              {/* Destination marker */}
              <circle
                cx={route.coordinates.x}
                cy={route.coordinates.y}
                r="0.8"
                fill="#d4af37"
                stroke="#92400e"
                strokeWidth="0.1"
              >
                <animate
                  attributeName="r"
                  values="0.8;1.2;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
          
          {/* Australia hub marker */}
          <circle
            cx={australiaPosition.x}
            cy={australiaPosition.y}
            r="1.5"
            fill="#92400e"
            stroke="#451a03"
            strokeWidth="0.2"
          >
            <animate
              attributeName="r"
              values="1.5;2;1.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Australia label */}
          <text
            x={australiaPosition.x}
            y={australiaPosition.y + 4}
            textAnchor="middle"
            fontSize="2"
            fill="#92400e"
            fontWeight="bold"
          >
            AUSTRALIA
          </text>
        </g>
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center space-x-2 text-xs">
          <div className="w-3 h-0.5 bg-grain-yellow border-dashed border border-grain-yellow"></div>
          <span className="text-grain-earth">Export Routes to Asian Markets</span>
        </div>
        <div className="flex items-center space-x-2 text-xs mt-1">
          <div className="w-3 h-3 rounded-full bg-grain-yellow"></div>
          <span className="text-grain-earth">Major Trading Hub</span>
        </div>
      </div>
    </div>
  );
}
