"use client";

import Image from "next/image";
import { useState } from "react";
import Section from "@/app/components/layout/Section";
import Row from "@/app/components/layout/Row";
import { FadeIn } from "@/app/components/ui/FadeIn";

const inputClass =
  "w-full rounded-xl border border-neutral-700 bg-neutral-900 p-6 text-base leading-6 text-white placeholder:text-neutral-400/60 focus:border-primary-500 focus:outline-none appearance-none";

export default function OrganizersApplyFormSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section id="apply" className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/stadium-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <FadeIn direction="up">
        <Row className="relative grid items-start gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Register Your League on MatchPoint
            </h2>
            <p className="max-w-[600px] text-base leading-6 text-white/80">
              Join the platform that connects Philippine basketball organizers
              with verified, reliable officials. Start finding the right referees
              for every game.
            </p>
            <form
              className="flex flex-col gap-8 rounded-3xl border border-primary-800 bg-gradient-to-b from-black to-primary-900 p-8 md:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="flex flex-col gap-6">
                <label className="flex flex-col gap-2 text-sm text-white">
                  League or Organization Name
                  <input
                    required
                    name="leagueName"
                    placeholder="e.g., Barangay League, Corporate Cup"
                    className={inputClass}
                  />
                </label>
                <div className="flex flex-col gap-6 sm:flex-row">
                  <label className="flex flex-1 flex-col gap-2 text-sm text-white">
                    Games Per Month
                    <select
                      required
                      name="gamesPerMonth"
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Estimated number
                      </option>
                      <option>1–5</option>
                      <option>6–15</option>
                      <option>16–30</option>
                      <option>30+</option>
                    </select>
                  </label>
                  <label className="flex flex-1 flex-col gap-2 text-sm text-white">
                    Sport
                    <select
                      name="sport"
                      defaultValue="Basketball"
                      className={inputClass}
                    >
                      <option>Basketball</option>
                    </select>
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm text-white">
                  City
                  <input
                    required
                    name="city"
                    placeholder="Your city"
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white">
                  Contact Person
                  <input
                    required
                    name="contactPerson"
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white">
                  Email Address
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-primary-500 hover:text-black"
              >
                {submitted ? "Registration Received!" : "Register as an Organizer"}
              </button>
            </form>
          </div>
          <div className="relative hidden min-h-[880px] overflow-hidden rounded-3xl lg:block">
            <Image
              src="/images/register_leaugue_image.jpg"
              alt="Register your league on MatchPoint"
              fill
              className="object-cover"
            />
          </div>
        </Row>
      </FadeIn>
    </Section>
  );
}
