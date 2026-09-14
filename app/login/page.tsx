import LoginBanner from "@/components/login/LoginBanner";
import LoginForm from "@/components/login/LoginForm";

export const metadata = {
  title: "Login / Sign Up",
  description: "Login or create an account to manage your bus tickets on LoPrice.com",
};

export default function LoginPage() {
  return (
    <main className="bg-[#f7f8fa]">
      <section className="container-shell grid min-h-[calc(100vh-284px)] place-items-center py-10">
        {/* The Layout Wrapper */}
        <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5 md:grid-cols-2">
          
          {/* Modular Components */}
          <LoginBanner />
          <LoginForm />
          
        </div>
      </section>
    </main>
  );
}