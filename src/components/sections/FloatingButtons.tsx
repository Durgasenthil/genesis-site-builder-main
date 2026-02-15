import { MessageCircle, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingButtons = () => {
  const isMobile = useIsMobile();
  const whatsappNumber = "917598125763"; // Replace with actual

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-[hsl(145,70%,40%)] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Mobile Call Now bar */}
      {isMobile && (
        <a
          href="tel:917598125763"
          className="fixed bottom-0 left-0 right-0 z-40 bg-primary text-primary-foreground py-3 flex items-center justify-center gap-2 font-medium text-sm shadow-lg"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      )}
    </>
  );
};

export default FloatingButtons;
