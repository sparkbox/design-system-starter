const variantsBoxes = [...document.querySelectorAll('.drizzle-pattern__variant-box')];

const variantsData = variantsBoxes.map((v) => {
  const root = v.closest('.drizzle-pattern');
  const patternContainer = root.querySelector('.drizzle-pattern__demo-box--view');
  const source = root.querySelector('.drizzle-pattern__source');
  const originalPattern = patternContainer.children[0].cloneNode(true);
  const variantGroups = [...v.querySelectorAll('.drizzle-pattern__variant-group')];

  return {
    dom: v,
    root,
    patternContainer,
    source,
    originalPattern,
    variantGroups,
  };
});

function checkFirstInputInEachSet() {
  variantsData.forEach((vb) => {
    vb.variantGroups.forEach((vs) => {
      const variantSet = vs;
      variantSet.querySelector('input').checked = true;
    });
  });
}

function getVariantData(vb) {
  return variantsData.find(v => v.dom === vb);
}

function refreshPattern(v) {
  v.patternContainer.children[0].remove();
  v.patternContainer.appendChild(v.originalPattern.cloneNode(true));
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function setSource(v, newHtml) {
  const variant = v;
  variant.source.innerHTML = escapeHtml(newHtml);
  if (window.Prism) {
    window.Prism.highlightElement(variant.source);
  }
}

function getSelectedVariants(v) {
  const selections = [];

  v.variantGroups.forEach((vs) => {
    const { value } = vs.querySelector(':checked');
    if (value) {
      selections.push(value);
    }
  });

  return selections;
}

function renderVariant(v) {
  refreshPattern(v);
  const selections = getSelectedVariants(v);
  const pattern = v.patternContainer.children[0];
  pattern.classList.add(...selections);
  const newHtml = v.patternContainer.innerHTML.trim();
  setSource(v, newHtml);
}

function onLoad() {
  checkFirstInputInEachSet();
  variantsData.forEach((v) => {
    renderVariant(v);
  });
}

function onChange(e) {
  const v = getVariantData(e.target.closest('.drizzle-pattern__variant-box'));
  renderVariant(v);
}

variantsBoxes.forEach(v => v.addEventListener('change', onChange));

onLoad();
