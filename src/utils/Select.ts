export const changeSelectedOption = (options: NodeListOf<ChildNode>, value: string) => {
	if (!options) {
		return;
	}

	const childElements = Object.values(options) as HTMLElement[];
	childElements.forEach((element) => {
		if (element.textContent !== value) {
			element.style.color = 'var(--font_color)';
		} else {
			element.style.color = 'var(--selected_color)';
		}
	});
};
