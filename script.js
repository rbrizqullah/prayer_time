document.addEventListener('DOMContentLoaded', () => {
    const latitude = -1.908115;
    const longitude = 116.009336;
    const apiUrl = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            const location = `${data.data.meta.timezone}`;
            document.getElementById('location').textContent = location;

            const prayerTimesTable = document.getElementById('prayer-times');
            for (const [prayer, time] of Object.entries(timings)) {
                const row = document.createElement('tr');
                const prayerCell = document.createElement('td');
                const timeCell = document.createElement('td');

                prayerCell.textContent = prayer;
                timeCell.textContent = time;

                row.appendChild(prayerCell);
                row.appendChild(timeCell);
                prayerTimesTable.appendChild(row);
            }
        })
        .catch(error => console.error('Error fetching prayer times:', error));
});
