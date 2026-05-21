"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import {
  bookingPropertySizes,
  bookingServices,
  bookingSteps,
  bookingTimeSlots,
  type BookingServiceKey,
} from "./booking-data";

type BookingDetails = {
  name: string;
  phone: string;
  email: string;
  address: string;
  apartmentUnit: string;
  notes: string;
  propertySize: string;
};

type BookingFlowProps = {
  initialServiceKey?: BookingServiceKey | null;
  onClose?: () => void;
  mode?: "page" | "modal";
};

const serviceIcons: Record<BookingServiceKey, string> = {
  postConstruction: "PC",
  moveInOut: "MI",
  deepCleaning: "DC",
  commercial: "CC",
  residential: "RC",
};

const stepVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.18 } },
};

function buildAvailableDates() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return Array.from({ length: 10 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index + 1);

    return {
      value: date.toISOString().slice(0, 10),
      label: formatter.format(date),
      disabled: date.getDay() === 0,
    };
  });
}

export default function BookingFlow({ initialServiceKey = null, onClose, mode = "page" }: BookingFlowProps) {
  const availableDates = useMemo(() => buildAvailableDates(), []);

  const [step, setStep] = useState(0);
  const [selectedServiceKey, setSelectedServiceKey] = useState<BookingServiceKey | null>(initialServiceKey ?? "residential");
  const [selectedDate, setSelectedDate] = useState(availableDates.find((date) => !date.disabled)?.value ?? "");
  const [selectedTime, setSelectedTime] = useState(bookingTimeSlots[0].value);
  const [details, setDetails] = useState<BookingDetails>({
    name: "",
    phone: "",
    email: "",
    address: "",
    apartmentUnit: "",
    notes: "",
    propertySize: "2BR",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const selectedService = useMemo(
    () => bookingServices.find((item) => item.key === selectedServiceKey) ?? bookingServices[4],
    [selectedServiceKey],
  );

  const selectedSize = bookingPropertySizes.find((item) => item.label === details.propertySize) ?? bookingPropertySizes[2];
  const estimatedPrice = Math.round(selectedService.price * selectedSize.multiplier);
  const progress = ((step + 1) / bookingSteps.length) * 100;

  const validateStep = () => {
    const nextErrors: string[] = [];

    if (step === 0 && !selectedServiceKey) nextErrors.push("Please select a service.");
    if (step === 1 && (!selectedDate || !selectedTime)) nextErrors.push("Please select a date and time.");
    if (step === 2) {
      if (!details.name.trim()) nextErrors.push("Name is required.");
      if (!details.phone.trim()) nextErrors.push("Phone is required.");
      if (!details.email.trim()) nextErrors.push("Email is required.");
      if (!details.address.trim()) nextErrors.push("Address is required.");
      if (!details.apartmentUnit.trim()) nextErrors.push("Apartment / unit is required.");
    }

    setErrors(nextErrors);
    return nextErrors.length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(current + 1, bookingSteps.length - 1));
  };

  const softCard = "border-black/10 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFBFA_100%)] hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_18px_45px_-28px_rgba(0,0,0,0.18)]";

  return (
    <section className={mode === "modal" ? "w-full p-4 sm:p-6 md:p-8" : "px-6 md:px-12 lg:px-24 pb-20 md:pb-28"}>
      <div className={mode === "modal" ? "mx-auto max-w-7xl space-y-6" : "mx-auto max-w-7xl space-y-6 md:space-y-8"}>
        <div className="relative rounded-[28px] border border-black/5 bg-white/82 p-5 md:p-6 lg:p-7 shadow-[0_28px_90px_-42px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="font-subtitle text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8A8A8A]">
                Booking
              </p>
              <h1 className="mt-3 text-[clamp(1.25rem,1.9vw,1.65rem)] font-semibold tracking-[-0.035em] text-[#111] leading-[1.1]">
                Book your cleaning
              </h1>
              <p className="font-subtitle mt-3 max-w-xl text-[13px] md:text-[14px] leading-[1.65] text-[#666]">
                Premium service planning with clear timing, a live estimate, and a smooth confirmation flow.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
              {[
                ["No payment", "due today"],
                ["Fast reply", "within hours"],
                ["Easy change", "reschedule anytime"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="min-w-[96px] rounded-[15px] border border-black/5 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFBFA_100%)] px-3 py-2.5 shadow-[0_12px_28px_-24px_rgba(0,0,0,0.16)] backdrop-blur"
                >
                  <p className="text-[8.5px] uppercase tracking-[0.26em] text-[#9A9A9A]">{label}</p>
                  <p className="mt-1 text-[13px] font-semibold text-[#111]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {onClose && mode === "modal" && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close booking flow"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#111] shadow-sm transition-colors hover:bg-black hover:text-white"
            >
              ×
            </button>
          )}
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-black/5">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#111] via-[#4A4A4A] to-[#E8521A]"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_360px] lg:items-start">
          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap gap-2">
              {bookingSteps.map((item, index) => {
                const active = index === step;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setStep(index)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2.5 text-left transition-all ${
                      active
                        ? "border-[#111] bg-[#111] text-white shadow-[0_18px_42px_-26px_rgba(0,0,0,0.45)]"
                        : "border-black/10 bg-white/80 text-[#6F6F6F] hover:-translate-y-0.5 hover:border-black/20 hover:bg-white"
                    }`}
                  >
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold ${active ? "bg-white/12 text-white" : "bg-black/5 text-[#111]"}`}>
                      {index + 1}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em]">{item}</span>
                  </button>
                );
              })}
            </div>

            {errors.length > 0 && (
              <div className="mb-5 rounded-[16px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {errors[0]}
              </div>
            )}

            <div className="rounded-[28px] border border-black/5 bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFCFA_100%)] p-5 sm:p-6 md:p-7 shadow-[0_24px_80px_-34px_rgba(0,0,0,0.14)]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="py-10 text-center sm:py-14"
                  >
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.45)]">
                      ✓
                    </div>
                    <h2 className="text-2xl md:text-[2rem] font-semibold tracking-[-0.03em] text-[#111]">
                      Booking received
                    </h2>
                    <p className="font-subtitle mx-auto mt-4 max-w-xl text-[14px] md:text-[15px] leading-7 text-[#666]">
                      Our team will review the details and confirm your appointment shortly.
                    </p>
                    <p className="font-subtitle mx-auto mt-4 max-w-xl text-sm leading-7 text-[#666]">
                      No payment due today. Your card is only collected after the booking is confirmed by our team.
                    </p>
                    {onClose && (
                      <div className="mt-8 flex justify-center">
                        <Button variant="black" onClick={onClose}>
                          Close
                        </Button>
                      </div>
                    )}
                  </motion.div>
                ) : step === 0 ? (
                  <motion.div key="service" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                    <div className="mb-6">
                      <p className="font-subtitle text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8A8A]">
                        Step 1
                      </p>
                      <h2 className="mt-3 text-[1.2rem] md:text-[1.38rem] font-semibold tracking-[-0.03em] text-[#111]">
                        Select your service
                      </h2>
                      <p className="font-subtitle mt-2.5 max-w-2xl text-[13px] md:text-[14px] leading-[1.65] text-[#666]">
                        Choose the cleaning scope that best matches your space. You can refine everything later.
                      </p>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {bookingServices.map((service) => {
                        const active = selectedServiceKey === service.key;

                        return (
                          <button
                            key={service.key}
                            type="button"
                            onClick={() => setSelectedServiceKey(service.key)}
                            className={`group relative overflow-hidden rounded-[18px] border p-4 text-left transition-all duration-300 ${
                              active
                                ? "border-[#111] bg-[#111] text-white shadow-[0_20px_55px_-28px_rgba(0,0,0,0.48)]"
                                : `${softCard}`
                            }`}
                          >
                            {active && <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />}
                            <div className="flex items-start gap-3.5">
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold tracking-[0.22em] ${
                                  active ? "border-white/10 bg-white/10 text-white" : "border-black/10 bg-[#FAFAF8] text-[#111]"
                                }`}
                              >
                                {serviceIcons[service.key]}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <p className="text-[15px] font-semibold leading-tight md:text-[16px]">{service.title}</p>
                                    <p className={`font-subtitle mt-1 text-[12px] leading-5.5 ${active ? "text-white/70" : "text-[#666]"}`}>
                                      {service.description}
                                    </p>
                                  </div>
                                  <div className="shrink-0 text-right">
                                    <p className="text-[8.5px] uppercase tracking-[0.26em] text-current/55">From</p>
                                    <p className="mt-1 text-[15px] font-semibold">${service.price}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div key="schedule" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                    <div className="mb-6">
                      <p className="font-subtitle text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8A8A]">
                        Step 2
                      </p>
                      <h2 className="mt-3 text-[1.2rem] md:text-[1.38rem] font-semibold tracking-[-0.03em] text-[#111]">
                        Pick a date and time
                      </h2>
                      <p className="font-subtitle mt-2.5 max-w-2xl text-[13px] md:text-[14px] leading-[1.65] text-[#666]">
                        Select an available day and a premium time window that suits your schedule.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="font-subtitle text-sm font-medium text-[#333]">Date</span>
                          <span className="font-subtitle text-xs text-[#888]">Sundays are unavailable</span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                          {availableDates.map((date) => {
                            const active = selectedDate === date.value;

                            return (
                              <button
                                key={date.value}
                                type="button"
                                disabled={date.disabled}
                                onClick={() => setSelectedDate(date.value)}
                                className={`rounded-[16px] border px-4 py-3.5 text-left transition-all duration-300 ${
                                  date.disabled
                                    ? "cursor-not-allowed border-black/5 bg-[#F5F4F1] text-[#BABABA] opacity-70"
                                    : active
                                      ? "border-[#111] bg-[#111] text-white shadow-[0_18px_46px_-26px_rgba(0,0,0,0.46)]"
                                      : `${softCard}`
                                }`}
                              >
                                <p className="text-[8.5px] uppercase tracking-[0.26em] text-current/50">Available</p>
                                <p className="mt-2 text-[13px] font-semibold">{date.label}</p>
                                <p className={`font-subtitle mt-1 text-xs ${active ? "text-white/70" : "text-[#777]"}`}>
                                  {date.disabled ? "Unavailable" : "Tap to select"}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="font-subtitle text-sm font-medium text-[#333]">Time slot</span>
                          <span className="font-subtitle text-xs text-[#888]">Choose your preferred window</span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {bookingTimeSlots.map((slot) => {
                            const active = selectedTime === slot.value;

                            return (
                              <button
                                key={slot.value}
                                type="button"
                                onClick={() => setSelectedTime(slot.value)}
                                className={`rounded-[16px] border px-4 py-3.5 text-left transition-all ${
                                  active
                                    ? "border-[#111] bg-[#111] text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.45)]"
                                    : `${softCard}`
                                }`}
                              >
                                <p className="text-[14px] font-semibold">{slot.label}</p>
                                <p className={`font-subtitle mt-1 text-[13px] ${active ? "text-white/70" : "text-[#666]"}`}>
                                  {slot.value}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : step === 2 ? (
                  <motion.div key="details" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                    <div className="mb-6">
                      <p className="font-subtitle text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8A8A]">
                        Step 3
                      </p>
                      <h2 className="mt-3 text-[1.2rem] md:text-[1.38rem] font-semibold tracking-[-0.03em] text-[#111]">
                        Your details
                      </h2>
                      <p className="font-subtitle mt-2.5 max-w-2xl text-[13px] md:text-[14px] leading-[1.65] text-[#666]">
                        Share the essentials so we can confirm the visit and make arrival feel effortless.
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        { label: "Full name", key: "name", type: "text", placeholder: "Your full name" },
                        { label: "Email", key: "email", type: "email", placeholder: "you@company.com" },
                        { label: "Phone", key: "phone", type: "tel", placeholder: "+1 555 000 0000" },
                        { label: "Apartment / Unit", key: "apartmentUnit", type: "text", placeholder: "Apt 4B / Floor 12" },
                        { label: "Service address", key: "address", type: "text", placeholder: "Street, city, area" },
                      ].map((field) => (
                        <label key={field.key} className="grid gap-2 md:col-span-1">
                          <span className="font-subtitle text-sm font-medium text-[#333]">{field.label}</span>
                          <input
                            type={field.type}
                            value={(details as Record<string, string>)[field.key]}
                            onChange={(event) => setDetails((current) => ({ ...current, [field.key]: event.target.value }))}
                            placeholder={field.placeholder}
                            className="h-12 rounded-[16px] border border-black/10 bg-[#FCFCFA] px-4 text-[14px] text-[#111] outline-none transition focus:border-black/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(17,17,17,0.04)]"
                          />
                        </label>
                      ))}

                      <label className="grid gap-2 md:col-span-2">
                        <span className="font-subtitle text-sm font-medium text-[#333]">Notes</span>
                        <textarea
                          rows={4}
                          value={details.notes}
                          onChange={(event) => setDetails((current) => ({ ...current, notes: event.target.value }))}
                          placeholder="Anything our team should know before arrival?"
                          className="rounded-[18px] border border-black/10 bg-[#FCFCFA] px-4 py-4 text-[14px] text-[#111] outline-none transition focus:border-black/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(17,17,17,0.04)] resize-none"
                        />
                      </label>

                      <label className="grid gap-2 md:col-span-2">
                        <span className="font-subtitle text-sm font-medium text-[#333]">Property size</span>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                          {bookingPropertySizes.map((option) => {
                            const active = details.propertySize === option.label;

                            return (
                              <button
                                key={option.label}
                                type="button"
                                onClick={() => setDetails((current) => ({ ...current, propertySize: option.label }))}
                                className={`rounded-[16px] border px-4 py-3 text-center transition-all ${
                                  active
                                    ? "border-[#111] bg-[#111] text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.45)]"
                                    : `${softCard}`
                                }`}
                              >
                                <p className="text-[14px] font-semibold">{option.label}</p>
                                <p className={`font-subtitle mt-1 text-[12px] ${active ? "text-white/70" : "text-[#666]"}`}>
                                  x{option.multiplier.toFixed(2)}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </label>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="review" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                    <div className="mb-6">
                      <p className="font-subtitle text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8A8A]">
                        Step 4
                      </p>
                      <h2 className="mt-3 text-[1.2rem] md:text-[1.38rem] font-semibold tracking-[-0.03em] text-[#111]">
                        Review & confirm
                      </h2>
                      <p className="font-subtitle mt-2.5 max-w-2xl text-[13px] md:text-[14px] leading-[1.65] text-[#666]">
                        Take a quick look before we finalize the request with our team.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ["Service", selectedService.title],
                        ["Property size", details.propertySize],
                        ["Date", selectedDate || "Not selected"],
                        ["Time", selectedTime],
                        ["Location", details.address],
                        ["Apartment / Unit", details.apartmentUnit],
                        ["Name", details.name],
                        ["Phone", details.phone],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between gap-4 rounded-[16px] border border-black/10 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFBFA_100%)] px-4 py-3.5"
                        >
                          <span className="font-subtitle text-sm font-medium text-[#666]">{label}</span>
                          <span className="max-w-[55%] text-right text-sm font-semibold text-[#111]">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3 rounded-[20px] border border-black/5 bg-[#F7F7F4] p-4 text-[13px] leading-[1.65] text-[#5A5A5A]">
                      <p>Final price may adjust after walkthrough for unusual scope.</p>
                      <p>No payment due today. Your card is only collected after the booking is confirmed by our team.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!submitted && (
                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep((current) => Math.max(current - 1, 0))}
                    className={step === 0 ? "invisible pointer-events-none" : ""}
                  >
                    Back
                  </Button>

                  {step < bookingSteps.length - 1 ? (
                    <Button variant="black" onClick={goNext} showArrow>
                      Continue
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={() => setSubmitted(true)} showArrow>
                      Confirm Booking
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-8">
            <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-[linear-gradient(180deg,#111_0%,#161616_100%)] p-6 text-white shadow-[0_28px_80px_-34px_rgba(0,0,0,0.48)] sm:p-7">
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${selectedService.accent}`} />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_28%)]" />
              <div className="relative">
                <p className="font-subtitle text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45">
                  Live estimate
                </p>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-subtitle text-[13px] text-white/60">Estimated total</p>
                    <p className="mt-1 text-[clamp(1.7rem,2.6vw,2.25rem)] font-semibold tracking-[-0.04em]">${estimatedPrice}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm text-white/80">
                    {selectedSize.label}
                  </div>
                </div>

                <div className="mt-6 rounded-[22px] border border-white/10 bg-white/6 p-4 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.24em] text-white/40">Selected service</p>
                      <p className="mt-2 text-[15px] font-semibold">{selectedService.title}</p>
                      <p className="font-subtitle mt-2 text-[13px] leading-6 text-white/60">{selectedService.description}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold tracking-[0.22em] text-white/80">
                      {serviceIcons[selectedService.key]}
                    </div>
                  </div>
                  <div className="my-4 h-px bg-white/10" />
                  <div className="grid gap-2 text-sm text-white/75">
                    <p>Property size: {details.propertySize}</p>
                    <p>Date: {selectedDate || "Choose a preferred date"}</p>
                    <p>Time: {selectedTime}</p>
                    <p>Location: {details.address || "Add your address"}</p>
                    <p>Unit: {details.apartmentUnit || "Add your unit number"}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-[16px] border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75">
                    Clean, careful service tailored to your selected scope.
                  </div>
                  <div className="rounded-[16px] border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75">
                    Flexible scheduling across the day.
                  </div>
                  <div className="rounded-[16px] border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75">
                    Final confirmation handled by our team.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
