import Image from "next/image";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main className="flex min-h-screen justify-between w-full font-inter">
          {children}
          <div className="auth-asset">
              <div>
                <Image src="/icons/auth-image6.png" alt="Auth image" width={500} height={500}/>
              </div>
          </div>
      </main>
    );
  }
  