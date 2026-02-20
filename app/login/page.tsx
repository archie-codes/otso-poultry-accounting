"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/"); // Redirects to Dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-70 animate-pulse" />
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-70 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-70 animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      <div className="w-full max-w-md p-8 rounded-3xl bg-card/60 backdrop-blur-2xl border border-border/50 shadow-2xl z-10 mx-4 relative group">
        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-white/0 rounded-3xl pointer-events-none dark:from-white/10 dark:to-white/0" />

        <div className="flex flex-col items-center mb-8 relative z-20">
          <div className="h-24 w-24 relative mb-6 drop-shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Otso Poultry Farm Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Otso Poultry Farm
          </h1>
          <p className="text-sm text-muted-foreground mt-2 font-medium">
            Accounting Monitoring System
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 relative z-20">
          <div className="space-y-2">
            <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground/90">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@otsopoultry.com"
              defaultValue="admin@otsopoultry.com"
              className="flex h-12 w-full rounded-xl border border-input/50 bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:bg-background/80"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground/90">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              defaultValue="demo123"
              className="flex h-12 w-full rounded-xl border border-input/50 bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:bg-background/80"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            Sign In to Dashboard
          </button>
        </form>

        <div className="mt-8 text-center relative z-20">
          <p className="text-xs text-muted-foreground bg-muted/30 p-4 rounded-xl border border-border/50 flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <strong>Demo Mode:</strong> Any credentials will grant access.
          </p>
        </div>
      </div>
    </div>
  );
}
