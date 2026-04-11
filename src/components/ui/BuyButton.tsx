'use client';

import { useState } from 'react';
import PurchaseModal from './PurchaseModal';

interface Props {
  className?: string;
  label?: string;
}

export default function BuyButton({ className, label = 'Comprar curso' }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className}
      >
        {label}
      </button>
      <PurchaseModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
