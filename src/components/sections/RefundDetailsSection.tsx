import { RiShieldLine, RiCalendarCloseLine, RiInformationLine, RiCheckLine, RiFileListLine, RiSunLine, RiUmbrellaLine } from "react-icons/ri";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const NON_REFUNDABLE_POINTS = [
  "Scheduling",
  "Arranging Puja Samagri and other required items",
  "Preparing the Puja according to the customer's details",
  "Reserving the selected date and time",
  "Making other arrangements specifically for the customer",
];

const BOOKING_DETAIL_POINTS = [
  "Puja type",
  "Date",
  "Time",
  "Devotee name(s)",
  "Gotra or other required details",
  "Contact information",
];

export default function RefundDetailsSection() {
  return (
    <section className="w-full py-16 lg:py-2" aria-label="Refund Policy Details">
      <div className="mx-auto max-w-7xl px-6 lg:px-16 flex flex-col gap-6">

        {/* ── Row 1: Cards 1 & 2 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Card 1 */}
          <AnimateOnScroll variant="fade-right">
            <div className="relative bg-white rounded-2xl border border-[#F0EBE3] shadow-sm p-7 h-full flex flex-col gap-5">
              <span className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-white text-[13px] font-bold">1</span>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00] text-[22px] flex-shrink-0"><RiShieldLine /></span>
                <h3 className="text-[16px] font-bold text-[#1a1a1a] leading-snug pr-8">Non-Refundable Puja Services</h3>
              </div>
              <div className="h-px bg-[#F0EBE3]" />
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">Once a Puja booking has been confirmed, the amount paid will not be eligible for a refund.</p>
                <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">This is because each Puja is personalized and preparations may begin immediately after confirmation, including:</p>
                <ul className="flex flex-col gap-2 mt-1">
                  {NON_REFUNDABLE_POINTS.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFF0E6] flex items-center justify-center mt-[1px]"><RiCheckLine className="text-[#FF6A00] text-[11px]" /></span>
                      <span className="text-[13px] font-medium text-[#4b5563] leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex items-start gap-3 bg-[#FFFBF0] border border-[#FFD580] rounded-xl px-4 py-3">
                <RiInformationLine className="text-[#FF6A00] text-[18px] flex-shrink-0 mt-[1px]" />
                <p className="text-[13px] font-semibold text-[#FF6A00] leading-relaxed">Therefore, customers are requested to carefully check all booking details before making payment.</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Card 2 */}
          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative bg-white rounded-2xl border border-[#F0EBE3] shadow-sm p-7 h-full flex flex-col gap-5">
              <span className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-white text-[13px] font-bold">2</span>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00] text-[22px] flex-shrink-0"><RiCalendarCloseLine /></span>
                <h3 className="text-[16px] font-bold text-[#1a1a1a] leading-snug pr-8">Cancellation by Customer</h3>
              </div>
              <div className="h-px bg-[#F0EBE3]" />
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">Once the booking is confirmed, customers cannot cancel the Puja for a refund.</p>
                <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">If a customer is unable to participate at the scheduled time, the amount paid will generally remain non-refundable.</p>
                <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">Where feasible, Pujavdhi may, at its discretion, offer an alternative date or another suitable arrangement. Any such arrangement will be subject to availability and applicable conditions.</p>
              </div>
              <div className="mt-auto flex items-start gap-3 bg-[#FFF0E6] rounded-xl px-4 py-4">
                <RiInformationLine className="text-[#FF6A00] text-[18px] flex-shrink-0 mt-[1px]" />
                <div>
                  <p className="text-[13px] font-bold text-[#1a1a1a] mb-1">Need Help?</p>
                  <p className="text-[13px] font-medium text-[#4b5563] leading-relaxed">If you have any concerns about your booking, please contact our support team before the scheduled Puja date.</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ── Row 2: Cards 3 & 4 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Card 3 */}
          <AnimateOnScroll variant="fade-right">
            <div className="relative bg-white rounded-2xl border border-[#F0EBE3] shadow-sm p-7 h-full flex flex-col gap-5">
              <span className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-white text-[13px] font-bold">3</span>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00] text-[22px] flex-shrink-0"><RiFileListLine /></span>
                <h3 className="text-[16px] font-bold text-[#1a1a1a] leading-snug pr-8">Changes to Booking Details</h3>
              </div>
              <div className="h-px bg-[#F0EBE3]" />
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">Customers should carefully verify the following before completing their booking:</p>
                <ul className="flex flex-col gap-2 mt-1">
                  {BOOKING_DETAIL_POINTS.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFF0E6] flex items-center justify-center mt-[1px]"><RiCheckLine className="text-[#FF6A00] text-[11px]" /></span>
                      <span className="text-[13px] font-medium text-[#4b5563] leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">Requests to change booking details after confirmation may not always be possible because the Puja is personalized and arrangements may already have been made.</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Card 4 */}
          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative bg-white rounded-2xl border border-[#F0EBE3] shadow-sm p-7 h-full flex flex-col gap-5">
              <span className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-white text-[13px] font-bold">4</span>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00] text-[22px] flex-shrink-0"><RiSunLine /></span>
                <h3 className="text-[16px] font-bold text-[#1a1a1a] leading-snug pr-8">1. If Pujavdhi Cannot Conduct the Puja</h3>
              </div>
              <div className="h-px bg-[#F0EBE3]" />
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">In the unlikely event that Pujavdhi is unable to conduct a confirmed Puja due to circumstances on our side, we will make reasonable efforts to provide an alternative date or suitable arrangement.</p>
                <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">If an alternative arrangement cannot reasonably be provided, Pujavdhi may offer an appropriate refund or other resolution, as applicable.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ── Row 3: Card 5 full width ── */}
        <AnimateOnScroll variant="fade-up">
          <div className="relative bg-white rounded-2xl border border-[#F0EBE3] shadow-sm p-7 flex flex-col gap-5">
            <span className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-white text-[13px] font-bold">5</span>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#FF6A00] text-[22px] flex-shrink-0"><RiUmbrellaLine /></span>
              <h3 className="text-[16px] font-bold text-[#1a1a1a] leading-snug pr-8">Force Majeure</h3>
            </div>
            <div className="h-px bg-[#F0EBE3]" />
            <div className="flex flex-col gap-3">
              <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">Pujavdhi will not be responsible for delays, changes, or inability to conduct a Puja caused by circumstances beyond our reasonable control, such as natural disasters, severe weather, government restrictions, transportation disruptions, technical failures, or other unforeseen events.</p>
              <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">In such circumstances, Pujavdhi will make reasonable efforts to provide an alternative arrangement wherever possible.</p>
              <p className="text-[14px] font-medium text-[#4b5563] leading-relaxed">By completing a booking on Pujavdhi, the customer acknowledges and agrees that:</p>
            </div>
            <div className="mt-auto flex items-start gap-3 bg-[#FFFBF0] border border-[#FFD580] rounded-xl px-4 py-3">
              <RiInformationLine className="text-[#FF6A00] text-[18px] flex-shrink-0 mt-[1px]" />
              <p className="text-[13px] font-semibold text-[#FF6A00] leading-relaxed">If you have any questions regarding this Refund &amp; Cancellation Policy, please contact Pujavdhi team before completing your booking.</p>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
