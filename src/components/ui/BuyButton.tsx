'use client';

import { useState } from 'react';
import PurchaseModal from './PurchaseModal';

interface Props {
  className?: string;
  label?: string;
  courseName?: string;
}

export default function BuyButton({ className, label = 'Comprar curso', courseName = '' }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className}
      >
        {label}
      </button>
      <PurchaseModal open={open} onClose={() => setOpen(false)} courseName={courseName} />
    </>
  );
}
