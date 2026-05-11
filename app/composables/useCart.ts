export const useCart = () => {
  const items = useState<any[]>('cart', () => [])

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
    console.log('newItem', newItem)
    console.log('id', id)
  }

  const totalItems = computed(() => {
    return items.value.length
  })

  return { items, addToCart, removeFromCart, totalItems }
}
