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

  const softCard =
    "border-[#D9DAD2] bg-white text-[#151515] hover:border-[#B8BAB0] hover:shadow-[0_14px_28px_-24px_rgba(0,0,0,0.26)]";
  const activeCard = "border-[#E8521A] bg-[#E8521A] text-white shadow-[0_16px_32px_-22px_rgba(232,82,26,0.65)]";

  return (
    <section className={mode === "modal" ? "w-full p-4 sm:p-6 md:p-8" : "px-4 sm:px-6 md:px-10 lg:px-16 pb-16 md:pb-24"}>
      <div className={mode === "modal" ? "mx-auto max-w-7xl space-y-6" : "mx-auto max-w-7xl space-y-6 md:space-y-8"}>
        <div className="relative rounded-[12px] border border-[#D9DAD2] bg-white p-4 shadow-[0_18px_48px_-38px_rgba(0,0,0,0.24)] sm:p-5 md:p-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#62625C]">
                Booking
              </p>
              <h1 className="mt-1.5 text-[1.05rem] font-semibold leading-[1.25] tracking-normal text-[#111] md:text-[1.25rem]">
                Book your cleaning
              </h1>
              <p className="mt-2 max-w-xl text-[14px] leading-6 text-[#4D4D45] md:text-[15px]">
                Pick service, schedule time, share details, and confirm in minutes.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {[
                ["No payment", "due today"],
                ["Fast reply", "within hours"],
                ["Easy change", "reschedule anytime"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="min-w-[112px] rounded-[10px] border border-[#E2E3DC] bg-[#F8F9F4] px-3 py-2.5"
                >
                  <p className="text-[12px] font-medium leading-5 text-[#686861]">{label}</p>
                  <p className="text-[14px] font-semibold leading-5 text-[#151515]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {onClose && mode === "modal" && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close booking flow"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D9DAD2] bg-white text-[#111] shadow-sm transition-colors hover:border-[#E8521A]/35 hover:text-[#E8521A]"
            >
              &times;
            </button>
          )}
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-[#E4E5DE]">
          <motion.div
            className="h-full rounded-full bg-[#E8521A]"
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
                    className={`inline-flex items-center gap-2 rounded-[10px] border px-3 py-2 text-left transition-all ${
                      active
                        ? "border-[#E8521A] bg-[#E8521A] text-white"
                        : "border-[#D9DAD2] bg-white text-[#4F4F49] hover:border-[#E8521A]/45"
                    }`}
                  >
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${active ? "bg-white/15 text-white" : "bg-[#FFF1EA] text-[#E8521A]"}`}>
                      {index + 1}
                    </span>
                    <span className="text-[12px] font-semibold leading-5">{item}</span>
                  </button>
                );
              })}
            </div>

            {errors.length > 0 && (
              <div className="mb-5 rounded-[10px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                {errors[0]}
              </div>
            )}

            <div className="rounded-[12px] border border-[#D9DAD2] bg-white p-5 shadow-[0_18px_50px_-38px_rgba(0,0,0,0.22)] sm:p-6 md:p-7">
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
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8521A] text-white shadow-[0_18px_40px_-20px_rgba(232,82,26,0.45)]">
                      &#10003;
                    </div>
                    <h2 className="text-2xl font-semibold tracking-normal text-[#111] md:text-[2rem]">
                      Booking received
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#4D4D45] md:text-[16px]">
                      Our team will review the details and confirm your appointment shortly.
                    </p>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#4D4D45]">
                      No payment due today. Your card is only collected after the booking is confirmed by our team.
                    </p>
                    {onClose && (
                      <div className="mt-8 flex justify-center">
                        <Button variant="primary" onClick={onClose}>
                          Close
                        </Button>
                      </div>
                    )}
                  </motion.div>
                ) : step === 0 ? (
                  <motion.div key="service" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-[#696963]">
                        Step 1
                      </p>
                      <h2 className="mt-2 text-[1.18rem] font-semibold tracking-normal text-[#111] md:text-[1.35rem]">
                        Select your service
                      </h2>
                      <p className="mt-2.5 max-w-2xl text-[14px] leading-6 text-[#4D4D45] md:text-[15px]">
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
                            className={`group relative overflow-hidden rounded-[10px] border p-4 text-left transition-all duration-300 sm:p-5 ${
                              active
                                ? activeCard
                                : `${softCard}`
                            }`}
                          >
                            {active && <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />}
                            <div className="flex items-start gap-3.5">
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold ${
                                  active ? "border-white/20 bg-white/15 text-white" : "border-[#E8521A]/20 bg-[#FFF3EC] text-[#E8521A]"
                                }`}
                              >
                                {serviceIcons[service.key]}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <p className={`text-[15px] font-semibold leading-tight md:text-[16px] ${active ? "!text-white" : "text-[#111]"}`}>{service.title}</p>
                                    <p className={`mt-1.5 text-[13px] leading-6 ${active ? "!text-white" : "text-[#4D4D45]"}`}>
                                      {service.description}
                                    </p>
                                  </div>
                                  <div className="shrink-0 text-right">
                                    <p className={`text-[12px] font-medium ${active ? "!text-white" : "text-[#696963]"}`}>From</p>
                                    <p className={`mt-1 text-[15px] font-semibold ${active ? "!text-white" : "text-[#111]"}`}>${service.price}</p>
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
                      <p className="text-xs font-semibold text-[#696963]">
                        Step 2
                      </p>
                      <h2 className="mt-2 text-[1.18rem] font-semibold tracking-normal text-[#111] md:text-[1.35rem]">
                        Pick a date and time
                      </h2>
                      <p className="mt-2.5 max-w-2xl text-[14px] leading-6 text-[#4D4D45] md:text-[15px]">
                        Select an available day and a premium time window that suits your schedule.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-[#272727]">Date</span>
                          <span className="text-xs text-[#686861]">Sundays are unavailable</span>
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
                                className={`rounded-[10px] border px-4 py-3.5 text-left transition-all duration-300 ${
                                  date.disabled
                                    ? "cursor-not-allowed border-[#E1E1DB] bg-[#F1F2EC] text-[#9A9A92] opacity-80"
                                    : active
                                      ? activeCard
                                      : `${softCard}`
                                }`}
                              >
                                <p className={`text-[12px] font-medium ${active ? "!text-white" : "text-current/70"}`}>Available</p>
                                <p className={`mt-2 text-[13px] font-semibold ${active ? "!text-white" : "text-[#111]"}`}>{date.label}</p>
                                <p className={`mt-1 text-xs ${active ? "!text-white" : "text-[#5C5C55]"}`}>
                                  {date.disabled ? "Unavailable" : "Tap to select"}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-[#272727]">Time slot</span>
                          <span className="text-xs text-[#686861]">Choose your preferred window</span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {bookingTimeSlots.map((slot) => {
                            const active = selectedTime === slot.value;

                            return (
                              <button
                                key={slot.value}
                                type="button"
                                onClick={() => setSelectedTime(slot.value)}
                                className={`rounded-[10px] border px-4 py-3.5 text-left transition-all ${
                                  active
                                    ? activeCard
                                    : `${softCard}`
                                }`}
                              >
                                <p className={`text-[14px] font-semibold ${active ? "!text-white" : "text-[#111]"}`}>{slot.label}</p>
                                <p className={`mt-1 text-[13px] ${active ? "!text-white" : "text-[#4D4D45]"}`}>
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
                      <p className="text-xs font-semibold text-[#696963]">
                        Step 3
                      </p>
                      <h2 className="mt-2 text-[1.18rem] font-semibold tracking-normal text-[#111] md:text-[1.35rem]">
                        Your details
                      </h2>
                      <p className="mt-2.5 max-w-2xl text-[14px] leading-6 text-[#4D4D45] md:text-[15px]">
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
                          <span className="text-sm font-semibold text-[#272727]">{field.label}</span>
                          <input
                            type={field.type}
                            value={(details as Record<string, string>)[field.key]}
                            onChange={(event) => setDetails((current) => ({ ...current, [field.key]: event.target.value }))}
                            placeholder={field.placeholder}
                            className="h-12 rounded-[10px] border border-[#D9DAD2] bg-white px-4 text-[15px] text-[#111] outline-none transition placeholder:text-[#8C8C84] focus:border-[#E8521A] focus:shadow-[0_0_0_4px_rgba(232,82,26,0.1)]"
                          />
                        </label>
                      ))}

                      <label className="grid gap-2 md:col-span-2">
                        <span className="text-sm font-semibold text-[#272727]">Notes</span>
                        <textarea
                          rows={4}
                          value={details.notes}
                          onChange={(event) => setDetails((current) => ({ ...current, notes: event.target.value }))}
                          placeholder="Anything our team should know before arrival?"
                          className="resize-none rounded-[10px] border border-[#D9DAD2] bg-white px-4 py-4 text-[15px] text-[#111] outline-none transition placeholder:text-[#8C8C84] focus:border-[#E8521A] focus:shadow-[0_0_0_4px_rgba(232,82,26,0.1)]"
                        />
                      </label>

                      <label className="grid gap-2 md:col-span-2">
                        <span className="text-sm font-semibold text-[#272727]">Property size</span>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                          {bookingPropertySizes.map((option) => {
                            const active = details.propertySize === option.label;

                            return (
                              <button
                                key={option.label}
                                type="button"
                                onClick={() => setDetails((current) => ({ ...current, propertySize: option.label }))}
                                className={`rounded-[10px] border px-4 py-3 text-center transition-all ${
                                  active
                                    ? activeCard
                                    : `${softCard}`
                                }`}
                              >
                                <p className={`text-[14px] font-semibold ${active ? "!text-white" : "text-[#111]"}`}>{option.label}</p>
                                <p className={`mt-1 text-[12px] ${active ? "!text-white" : "text-[#4D4D45]"}`}>
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
                      <p className="text-xs font-semibold text-[#696963]">
                        Step 4
                      </p>
                      <h2 className="mt-2 text-[1.18rem] font-semibold tracking-normal text-[#111] md:text-[1.35rem]">
                        Review & confirm
                      </h2>
                      <p className="mt-2.5 max-w-2xl text-[14px] leading-6 text-[#4D4D45] md:text-[15px]">
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
                          className="flex flex-col gap-1 rounded-[10px] border border-[#D9DAD2] bg-[#FAFAF7] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                        >
                          <span className="text-sm font-medium text-[#5C5C55]">{label}</span>
                          <span className="max-w-full text-sm font-semibold text-[#111] sm:max-w-[60%] sm:text-right">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3 rounded-[10px] border border-[#E1E2DA] bg-[#F7F8F3] p-4 text-[14px] leading-6 text-[#4D4D45]">
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
                    <Button variant="primary" onClick={goNext} showArrow>
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
            <div className="rounded-[12px] border border-[#D9DAD2] bg-white p-5 text-[#111] shadow-[0_18px_50px_-38px_rgba(0,0,0,0.24)] sm:p-6">
              <div className="h-1 w-16 rounded-full bg-[#E8521A]" />
              <div className="mt-5">
                <p className="text-sm font-semibold text-[#696963]">
                  Live estimate
                </p>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[14px] text-[#4D4D45]">Estimated total</p>
                    <p className="mt-1 text-[2rem] font-semibold leading-none tracking-normal text-[#111] md:text-[2.25rem]">${estimatedPrice}</p>
                  </div>
                  <div className="rounded-[10px] border border-[#F0C3AE] bg-[#FFF3EC] px-3 py-2 text-sm font-semibold text-[#C74713]">
                    {selectedSize.label}
                  </div>
                </div>

                <div className="mt-6 border-t border-[#E5E6DF] pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[13px] font-medium text-[#696963]">Selected service</p>
                      <p className="mt-2 text-[16px] font-semibold text-[#111]">{selectedService.title}</p>
                      <p className="mt-2 text-[14px] leading-6 text-[#4D4D45]">{selectedService.description}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F0C3AE] bg-[#FFF3EC] text-xs font-semibold text-[#E8521A]">
                      {serviceIcons[selectedService.key]}
                    </div>
                  </div>
                  <div className="my-4 h-px bg-[#E5E6DF]" />
                  <div className="grid gap-2 text-[14px] leading-6 text-[#3E3E38]">
                    <p><span className="font-semibold text-[#111]">Property size:</span> {details.propertySize}</p>
                    <p><span className="font-semibold text-[#111]">Date:</span> {selectedDate || "Choose a preferred date"}</p>
                    <p><span className="font-semibold text-[#111]">Time:</span> {selectedTime}</p>
                    <p><span className="font-semibold text-[#111]">Location:</span> {details.address || "Add your address"}</p>
                    <p><span className="font-semibold text-[#111]">Unit:</span> {details.apartmentUnit || "Add your unit number"}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-[10px] border border-[#E1E2DA] bg-[#F7F8F3] px-4 py-3 text-[14px] leading-6 text-[#4D4D45]">
                  Clean service, flexible timing, and quick team confirmation.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
