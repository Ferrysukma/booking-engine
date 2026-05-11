export const useColor = () => {
  const color_theme: any = useCookie('color_theme')
  const theme = color_theme.value.theme
  const secondaryTheme = color_theme.value.secondaryTheme
  return useState('color', () => ({
    // bg_theme: 'bg-[' + theme + ']',
    // bg_secondaryTheme: 'bg-[' + secondaryTheme + ']',
    // text_theme: 'text-[' + theme + ']',
    // border_theme: 'border-[' + theme + ']',
    // ring_theme: 'ring-[' + theme + ']',
    // checked_hover_bg_theme: 'peer-checked:hover:bg-[' + theme + ']',
    // checked_bg_theme: 'peer-checked:bg-[' + theme + ']',
    // checked_border_theme: 'peer-checked:border-[' + theme + ']',
    primary: theme,
    secondary: secondaryTheme,
  }))
}
