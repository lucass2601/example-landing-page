import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LegalNoticePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center h-16">
          <div className="flex items-center mr-4">
            <span className="text-xl font-bold">tournal</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="mb-8 text-3xl font-bold">Legal Notice</h1>

          <section className="mb-8">
            <p className="mb-2 text-muted-foreground">
              Lucas Fischer
              <br />
              Friedenstraße 17
              <br />
              42579 Heiligenhaus
              <br />
              Germany
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Contact</h2>
            <p className="mb-2 text-muted-foreground">
              Email: lucas.fischer2002@t-online.de
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
