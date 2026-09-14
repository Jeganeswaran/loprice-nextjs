import ProfileContent from "@/components/profile/ProfileContent";

export const metadata = {
  title: "My Profile",
  description: "Manage your LoPrice.com account, bookings, and preferences.",
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="container-shell">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">My Account</h1>
          <p className="mt-1 text-sm text-slate-500">Manage your personal information and travel preferences.</p>
        </div>

        {/* The Interactive Dashboard */}
        <ProfileContent />
        
      </div>
    </main>
  );
}