import React from 'react';

export function DoodleLine() {
  return (
    <div
      className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 -z-10"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none'/%3e%3cpath d='M0 4.5C0 4.5 102.5 4.5 102.5 4.5C205 4.5 205 -3.5 307.5 -3.5C410 -3.5 410 4.5 512.5 4.5C615 4.5 615 -3.5 717.5 -3.5C820 -3.5 820 4.5 922.5 4.5C1025 4.5 1025 -3.5 1127.5 -3.5C1230 -3.5 1230 4.5 1332.5 4.5C1435 4.5 1435 -3.5 1537.5 -3.5C1640 -3.5 1640 4.5 1742.5 4.5C1845 4.5 1845 -3.5 1947.5 -3.5C2050 -3.5 2050 4.5 2152.5 4.5C2255 4.5 2255 -3.5 2357.5 -3.5C2460 -3.5 2460 4.5 2562.5 4.5C2665 4.5 2665 -3.5 2767.5 -3.5C2870 -3.5 2870 4.5 2972.5 4.5C3075 4.5 3075 -3.5 3177.5 -3.5C3280 -3.5 3280 4.5 3382.5 4.5C3485 4.5 3485 -3.5 3587.5 -3.5C3690 -3.5 3690 4.5 3792.5 4.5C3895 4.5 3997.5 4.5 3997.5 4.5' stroke='hsl(var(--primary))' stroke-width='2' stroke-dasharray='10 5' stroke-linecap='butt' stroke-linejoin='miter'/%3e%3c/svg%3e")`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        width: '400%', // Make it wide enough for many items
        left: '5%', // Start slightly off-screen
      }}
    />
  );
}
