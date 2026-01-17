"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ContactMe() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-muted-foreground">
            Get in touch with me. I will get back to you as soon as possible.
          </p>
        </div>

        <div className="my-16 h-px w-full bg-border" />

        <div className="max-w-3xl">
          <h3 className="text-lg font-medium">Send me a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill out the form below and I will get back to you as soon as
            possible.
          </p>

          <form className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input id="name" placeholder="Your full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone <span className="text-destructive">*</span>
                </Label>
                <Input id="phone" placeholder="+1 (123) xxx-xxxx" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or just say hello..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
