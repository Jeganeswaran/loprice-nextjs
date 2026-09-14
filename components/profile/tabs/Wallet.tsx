import { Wallet as WalletIcon, Plus, ArrowUpRight, ArrowDownLeft, Gift } from "lucide-react";

const transactions = [
  { id: 1, type: "credit", title: "Refund for LP-5647382", date: "05 Aug, 2024", amount: "+ ₹450" },
  { id: 2, type: "debit", title: "Booking LP-9823746", date: "20 Oct, 2024", amount: "- ₹850" },
  { id: 3, type: "credit", title: "LoPrice Cashback", date: "15 Sep, 2024", amount: "+ ₹120" },
  { id: 4, type: "credit", title: "Referral Bonus", date: "02 Sep, 2024", amount: "+ ₹200" },
];

export default function Wallet() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Balance Card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b1b3d] to-[#1a2f5e] p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#bf2629] opacity-30 blur-3xl -mr-10 -mt-10" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-blue-100/80 mb-2">
            <WalletIcon size={18} />
            <span className="text-sm font-medium">Available Balance</span>
          </div>
          <h2 className="text-4xl font-black tracking-tight">₹2,450<span className="text-2xl text-blue-200/60">.00</span></h2>
          
          <div className="mt-6 flex gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-blue-50">
              <Plus size={14} /> Add Money
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white border border-white/20 backdrop-blur-md transition hover:bg-white/20">
              <Gift size={14} /> Offers
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Transactions</h3>
        <div className="space-y-2">
          {transactions.map((tx) => {
            const isCredit = tx.type === "credit";
            return (
              <div key={tx.id} className="flex items-center justify-between rounded-2xl p-3 transition hover:bg-slate-50">
                <div className="flex items-center gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    isCredit ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                  }`}>
                    {isCredit ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{tx.title}</p>
                    <p className="text-xs text-slate-400">{tx.date}</p>
                  </div>
                </div>
                <p className={`text-sm font-bold ${isCredit ? "text-emerald-600" : "text-slate-800"}`}>
                  {tx.amount}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}