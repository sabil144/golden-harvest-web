
import React from 'react';
import { ArrowUp, ArrowDown, BarChart3 } from 'lucide-react';

interface PriceCardProps {
  commodity: string;
  price: string;
  change: {
    value: string;
    percentage: string;
    isPositive: boolean;
  };
  range: {
    low: string;
    high: string;
  };
  lastUpdated: string;
}

const PriceCard = ({ commodity, price, change, range, lastUpdated }: PriceCardProps) => (
  <div className="grain-card hover-scale">
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-bold text-grain-green text-lg">{commodity}</h3>
      <div className={`flex items-center ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {change.isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        <span className="ml-1">{change.value} ({change.percentage})</span>
      </div>
    </div>
    <div className="text-3xl font-bold mb-4 text-grain-earth-dark">${price}</div>
    <div className="text-sm text-grain-earth">
      <div className="flex justify-between mb-2">
        <span>Range:</span>
        <span>${range.low} - ${range.high}</span>
      </div>
      <div className="text-right text-xs text-grain-earth">
        Last updated: {lastUpdated}
      </div>
    </div>
  </div>
);

const MarketPricesSection = () => {
  const prices = [
    {
      commodity: "CBOT Wheat",
      price: "621.50",
      change: {
        value: "+2.75",
        percentage: "0.44%",
        isPositive: true
      },
      range: {
        low: "615.25",
        high: "626.00"
      },
      lastUpdated: "02:11 AM"
    },
    {
      commodity: "CBOT Corn",
      price: "431.25",
      change: {
        value: "+1.50",
        percentage: "0.35%",
        isPositive: true
      },
      range: {
        low: "428.75",
        high: "433.50"
      },
      lastUpdated: "02:11 AM"
    },
    {
      commodity: "CBOT Soybeans",
      price: "1172.50",
      change: {
        value: "+5.25",
        percentage: "0.45%",
        isPositive: true
      },
      range: {
        low: "1165.25",
        high: "1179.25"
      },
      lastUpdated: "02:11 AM"
    },
    {
      commodity: "ICE Canola",
      price: "632.80",
      change: {
        value: "+1.20",
        percentage: "0.19%",
        isPositive: true
      },
      range: {
        low: "631.50",
        high: "635.40"
      },
      lastUpdated: "02:11 AM"
    }
  ];

  const australianPrices = [
    {
      location: "SA",
      type: "Spot",
      price: "646.19"
    },
    {
      location: "VIC",
      type: "Spot",
      price: "636.25"
    },
    {
      location: "WA",
      type: "Spot",
      price: "655.31"
    }
  ];

  return (
    <section className="py-20 bg-grain-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Market Prices</h2>
          <p className="section-subtitle">
            Stay updated with the latest grain prices from global and Australian markets.
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-serif font-bold text-grain-green mb-6">Global Futures</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prices.map((price, index) => (
              <PriceCard 
                key={index}
                commodity={price.commodity}
                price={price.price}
                change={price.change}
                range={price.range}
                lastUpdated={price.lastUpdated}
              />
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-serif font-bold text-grain-green mb-6">Australian Prices</h3>
            <div className="grain-card">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-grain-beige">
                      <th className="text-left py-3 px-4 font-semibold text-grain-green">Location</th>
                      <th className="text-left py-3 px-4 font-semibold text-grain-green">Type</th>
                      <th className="text-right py-3 px-4 font-semibold text-grain-green">Price (AUD/tonne)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {australianPrices.map((item, index) => (
                      <tr key={index} className="border-b border-grain-beige-light hover:bg-grain-beige/20 transition-colors">
                        <td className="py-3 px-4">{item.location}</td>
                        <td className="py-3 px-4">{item.type}</td>
                        <td className="py-3 px-4 text-right">${item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-right text-xs text-grain-earth mt-4 px-4 pb-2">
                Last updated: 02:11 AM
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold text-grain-green mb-6">Exchange Rate Calculator</h3>
            <div className="grain-card p-6">
              <div className="flex items-center justify-center mb-6">
                <BarChart3 size={32} className="text-grain-yellow-dark mr-3" />
                <p className="text-grain-earth-dark">1 AUD = 0.5999 USD</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-grain-earth mb-1">AUD</label>
                  <input 
                    type="number"
                    defaultValue="1"
                    className="w-full px-4 py-2 border border-grain-beige rounded-md focus:outline-none focus:ring-2 focus:ring-grain-yellow"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-grain-earth mb-1">USD</label>
                  <input 
                    type="number"
                    defaultValue="0.5999"
                    className="w-full px-4 py-2 border border-grain-beige rounded-md focus:outline-none focus:ring-2 focus:ring-grain-yellow"
                  />
                </div>
              </div>
              
              <div className="text-right text-xs text-grain-earth mt-6">
                Last updated: 10:02 AM
              </div>
            </div>
            
            <div className="mt-6">
              <a href="https://www.grainprice.com.au" target="_blank" rel="noopener noreferrer" className="text-grain-green hover:text-grain-green-dark transition-colors flex items-center">
                <span className="mr-1">View detailed pricing data</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-grain-earth">
            Data provided for demonstration purposes only. For actual trading, please refer to official market data sources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketPricesSection;
