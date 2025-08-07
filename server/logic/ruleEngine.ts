export function getReply(message: string): string {
  const msg = message.toLowerCase()
  const greetings = ['hello', 'hi', 'hey', 'salam', 'shalom', 'مرحبا']
  const items = ['iphone', 's24', 'playstation', 'macbook', 'xiaomi', 'lenovo', 'motorola']

  if (greetings.some(greet => msg.includes(greet))) {
    return 'Welcome to TechMart! How can I assist you today?'
  }

  if (items.some(item => msg.includes(item))) {
    const found = items.find(item => msg.includes(item))
    return `Looking for a ${found}? We've got great deals!`
  }

  if (msg.includes('track')) {
    return '📦 Please provide your order ID for tracking.'
  }

  if (msg.includes('support')) {
    return '👨‍💻 Reach us at support@techmart.com or on WhatsApp.'
  }

  return '🤖 Sorry, I didn’t understand that.'
}