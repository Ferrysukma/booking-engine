export const useCart = () => {
  const items = useCookie<any[]>('cart', {
    default: () => [],
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })

  // const items = useState<any[]>('cart', () => [])

  const addToCart = (roomId: number, packageId: number, quantity: number) => {
    // Check if item already exists to increment quantity (optional)
    for (let i = 0; i < quantity; i++) {
      items.value.push({
        id: Math.random().toString(36).substring(2, 10),
        roomId,
        packageId,
      })
    }
  }

  const removeFromCart = (id: string) => {
    const newItem = items.value.filter((item: any) => item.id !== id)
    items.value = newItem
  }

  const totalItems = computed(() => {
    return items.value.length
  })

  return { items, addToCart, removeFromCart, totalItems }
}
