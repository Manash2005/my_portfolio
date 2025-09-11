import React from 'react';

export function DoodleLine() {
  return (
    <div
      className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 -z-10"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none'/%3e%3cpath d='M0 40.5C0 40.5 102.5 40.5 102.5 40.5C205 40.5 205 -39.5 307.5 -39.5C410 -39.5 410 40.5 512.5 40.5C615 40.5 615 -39.5 717.5 -39.5C820 -39.5 820 40.5 922.5 40.5C1025 40.5 1025 -39.5 1127.5 -39.5C1230 -39.5 1230 40.5 1332.5 40.5C1435 40.5 1435 -39.5 1537.5 -39.5C1640 -39.5 1640 40.5 1742.5 40.5C1845 40.5 1845 -39.5 1947.5 -39.5C2050 -39.5 2050 40.5 2152.5 40.5C2255 40.5 2255 -39.5 2357.5 -39.5C2460 -39.5 2460 40.5 2562.5 40.5C2665 40.5 2665 -39.5 2767.5 -39.5C2870 -39.5 2870 40.5 2972.5 40.5C3075 40.5 3075 -39.5 3177.5 -39.5C3280 -39.5 3280 40.5 3382.5 40.5C3485 40.5 3485 -39.5 3587.5 -39.5C3690 -39.5 3690 40.5 3792.5 40.5C3895 40.5 3997.5 40.5 3997.5 40.5' stroke='hsl(var(--primary))' stroke-width='3' stroke-dasharray='10 5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        width: '400%',
        height: '80px',
        left: '5%',
      }}
    />
  );
}
