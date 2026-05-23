import { bookingServices, type BookingServiceKey } from "@/components/booking/booking-data";
import BookingFlow from "@/components/booking/BookingFlow";

type BookingPageProps = {
  searchParams?: Promise<{
    service?: string | string[];
  }>;
};

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = await searchParams;
  const serviceParam = Array.isArray(params?.service) ? params.service[0] : params?.service;
  const initialService = bookingServices.some((item) => item.key === serviceParam)
    ? (serviceParam as BookingServiceKey)
    : null;

  return (
    <main className="min-h-screen bg-[#F6F7F3] pt-3 md:pt-6">
      <BookingFlow mode="page" initialServiceKey={initialService} />
    </main>
  );
}
