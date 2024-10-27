import React from 'react';

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BiSolidTShirt } from 'react-icons/bi';
import { FaPlaystation } from 'react-icons/fa';
import { GiMonclerJacket } from 'react-icons/gi';
import { IoIosPhonePortrait } from 'react-icons/io';
import { BsCupFill } from 'react-icons/bs';
import { GiCoffeeBeans } from 'react-icons/gi';

const data = [
  {
    id: '0JWEJS7ISNC',
    title: 'Premium T-Shirt',
    date: 'Jul 12h 2024',
    status: 'Completed',
    category: <BiSolidTShirt />,
  },
  {
    id: '0JWEJS7ISNC',
    title: 'Playstation 5',
    date: 'Jul 12h 2024',
    status: 'Pending',
    category: <FaPlaystation />,
  },
  {
    id: '0JWEJS7ISNC',
    title: 'Hoodie Gombrong',
    date: 'Jul 12h 2024',
    status: 'Pending',
    category: <GiMonclerJacket />,
  },
  {
    id: '0JWEJS7ISNC',
    title: 'iPhone 15 Pro Max',
    date: 'Jul 12h 2024',
    status: 'Completed',
    category: <IoIosPhonePortrait />,
  },
  {
    id: '0JWEJS7ISNC',
    title: 'Lotse',
    date: 'Jul 12h 2024',
    status: 'Completed',
    category: <BsCupFill />,
  },
  {
    id: '0JWEJS7ISNC',
    title: 'Starbucks',
    date: 'Jul 12h 2024',
    status: 'Completed',
    category: <GiCoffeeBeans />,
  },
  {
    id: '0JWEJS7ISNC',
    title: 'Tinek Detstar T-Shirt',
    date: 'Jul 12h 2024',
    status: 'Completed',
    category: <BiSolidTShirt />,
  },
];

const TransactionsCard = () => {
  return (
    <div className="h-full flex-1 rounded-2xl border-2 px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Transaction</div>
        <BiDotsHorizontalRounded size={24} />
      </div>
      <div className="mt-8 flex h-[calc(100%-64px)] flex-col justify-between gap-4">
        {data.map((item) => (
          <div className="flex items-center gap-3 text-sm">
            <div key={item.title} className="rounded-full bg-gray-100 p-3">
              {React.cloneElement(item.category, {
                className: 'size-6',
              })}
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <div className="font-semibold">{item.title}</div>
                <div
                  className={`${item.status === 'Completed' ? 'text-green-800' : ''}`}
                >
                  {item.status}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-black/60">{item.date}</div>
                <div className="text-black/60">{item.id}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsCard;
