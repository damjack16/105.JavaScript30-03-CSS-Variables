const inputs = document.querySelectorAll(".controls input");

function changeParameters() {
    // suffix means px or emtpy from data-sizing
    const suffix = this.dataset.sizing || '';
    // documentElement.style is focus on document child(<html>)
    // setProperty set new value for a property on a CSS style - in this case it will change value of blur, spacing or base variable in css 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', changeParameters));
inputs.forEach(input => input.addEventListener('mousemove', changeParameters));