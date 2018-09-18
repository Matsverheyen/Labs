var soort;

if (window.confirm('Is de kaas geel?')) {
  if (window.confirm('Zitten er gaten in?')) {
    if (window.confirm('Is de kaas belachelijk duurt?')) {
      soort = 'Emmenthaler';
    } else {
      soort = 'Leerdammer';
    }
  } else {
    if (window.confirm('Is de kaas hard als steen?')) {
      soort = 'Parmigiano Reggiano';
    } else {
      soort = 'Goudse kaas';
    }
  }
} else {
  if (window.confirm('Heeft de kaas blauwe schimmels?')) {
    if (window.confirm('Heeft de kaas een korst?')) {
      soort = 'Bleu de Rochbaron';
    } else {
      soort = 'Foume d\'Ambert';
    }
  } else {
    if (window.confirm('Heeft de kaas een korst?')) {
      soort = 'Camembert';
    } else {
      soort = 'Mozzarella';
    }
  }
}

document.write(soort);
