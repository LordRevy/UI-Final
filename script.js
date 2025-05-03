
document.addEventListener('DOMContentLoaded', () => {
    const timezones = Intl.supportedValuesOf('timeZone');
    const timezoneSelect = document.getElementById('timezone');
  
    if (timezoneSelect) {
      // Populate the select element with timezone options
      timezones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone;
        option.textContent = zone;
        timezoneSelect.appendChild(option);
      });
  
      // Set the default value to the user's current timezone
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      timezoneSelect.value = userTimeZone;
    }
  });

