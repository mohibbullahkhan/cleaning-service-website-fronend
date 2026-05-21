import { bookingServices, type BookingServiceKey } from "@/components/booking/booking-data";
import BookingFlow from "@/components/booking/BookingFlow";

type BookingPageProps = {
  searchParams?: {
    service?: string;
  };
};

export default function BookingPage({ searchParams }: BookingPageProps) {
  const initialService = bookingServices.some((item) => item.key === searchParams?.service)
    ? (searchParams?.service as BookingServiceKey)
    : null;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(232,82,26,0.08),transparent_32%),linear-gradient(180deg,#F7F5EF_0%,#FAFAF8_100%)] pt-4 md:pt-8">
      <BookingFlow mode="page" initialServiceKey={initialService} />
    </main>
  );
}
