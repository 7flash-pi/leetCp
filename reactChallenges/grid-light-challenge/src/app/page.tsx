"use client";
import { useState } from "react";
import Cell from "./common/components/Cell";

export default function Home() {
  const [order, setOrder] = useState([] as number[]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const handleCellClick = (index: number) => {
    const newOrder: number[] = [...order, index];
    setOrder(newOrder);
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  const deactivateCells = () => {
    setIsDeactivating(true);

    const timer = setInterval(() => {
      setOrder((oldOrder) => {
        const newOrder = oldOrder.slice();
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 400);
  };
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div
        className={`grid max-w-[600px] w-full p-5 gap-5 border  border-[#000] `}
        style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              handleClick={() => handleCellClick(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  );
}
