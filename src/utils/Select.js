export const changeSelectedOption = (options, value) => {
  options.forEach((element) => {
    if (element.textContent !== value) {
      element.style.color = 'var(--font_color)'
    } else {
      element.style.color = 'var(--selected_color)'
    }
  })
}
