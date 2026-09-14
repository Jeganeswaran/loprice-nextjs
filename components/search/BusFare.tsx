interface BusFareProps {
  bus: {
    price: number;
  };
}

export default function BusFare({ bus }: BusFareProps) {
  return (
    <div className="text-right sm:min-w-[110px]">
      <div className="text-2xl font-black text-[#bf2629]">₹{bus.price}</div>
      <div className="text-xs font-semibold text-neutral-500">Onwards</div>
    </div>
  );
}
