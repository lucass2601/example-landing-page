import Link from "next/link";
import { ArrowRight, Calendar, Trophy, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/feature-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center h-16">
          <div className="flex items-center mr-4">
            <span className="text-xl font-bold">tournal</span>
          </div>
          <nav className="flex gap-4 ml-auto sm:gap-6">
            <Link
              href="#discord"
              className="text-sm font-medium hover:underline"
            >
              Join Discord
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 space-y-6 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
              Create & Manage Tournaments
              <span className="text-primary"> With Ease</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              The ultimate mobile app for organizing, managing, and
              participating in tournaments of any size. Coming soon to iOS and
              Android.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#discord">
                  Join Our Community <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <FeatureCard
              icon={<Trophy />}
              title="Tournament Creation"
              description="Create tournaments with round-robin or league formats in minutes."
            />
            <FeatureCard
              icon={<Users />}
              title="Team Management"
              description="Easily manage participants, teams, and registrations with automated tools."
            />
            <FeatureCard
              icon={<Calendar />}
              title="Scheduling"
              description="Automatic or manual scheduling with conflict detection."
            />
          </div>
        </section>

        <section id="discord" className="py-12 bg-muted md:py-24 lg:py-32">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">
                Join Our Community
              </h2>
              <p className="mt-4 text-muted-foreground">
                Connect with other tournament organizers and stay updated on our
                progress.
              </p>
              <div className="flex justify-center mx-auto mt-8">
                <Button asChild size="lg">
                  <Link
                    href="https://discord.gg/EWkRwSCzMP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Discord
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/legal" className="hover:underline">
              Legal Notice
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
