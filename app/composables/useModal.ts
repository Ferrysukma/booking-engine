export const useModal = () => {
  const isOpen = useState('modal-open', () => false)

  const openModal = () => {
    isOpen.value = true
  }

  const closeModal = () => {
    isOpen.value = false
  }

  return {
    isOpen,
    openModal,
    closeModal
  }
}
