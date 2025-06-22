export async function getFormControl() {
  try {
    const response = await fetch('https://cervical.praispranav.com/day-template/get-form-control', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key': '8732jhjsdhf89yydfiu'
      }
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error('API error', err);
    return null;
  }
}

export async function getTemplates() {
  try {
    const res = await fetch('https://cervical.praispranav.com/day-template/get-template', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key': '8732jhjsdhf89yydfiu'
      }
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('API error in getTemplates:', err);
    return [];
  }
}
