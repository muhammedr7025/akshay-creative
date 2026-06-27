const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919999999999"

export const WHATSAPP_MESSAGES = {
  bookShoot: "Hi Akshay! I'd like to book a shoot. Can we discuss details?",
  joinCommunity: "Hi! I'm a creative professional and I'd love to join Akshay's Creative Platform community.",
  portrait: "Hi Akshay! I'm interested in booking a Portrait Photography session.",
  fashion: "Hi Akshay! I'm interested in booking a Fashion Photography session.",
  boudoir: "Hi Akshay! I'm interested in booking a Boudoir Photography session.",
  concept: "Hi Akshay! I'm interested in booking a Concept Shoot.",
  film: "Hi Akshay! I'm interested in booking a Creative Film/Reel.",
  opportunity: (title: string) => `Hi Akshay! I saw the opportunity "${title}" and I'd like to apply.`,
  general: "Hi Akshay! I found you through your creative platform and would love to connect.",
  urgent: "Hi Akshay! I need an urgent booking. Can we discuss availability?",
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`
}
