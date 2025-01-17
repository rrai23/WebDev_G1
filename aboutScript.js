document.addEventListener('DOMContentLoaded', function() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const hoverCard = document.getElementById(`card-${profile.id.split('-')[1]}`);

        profile.addEventListener('mousemove', (e) => {
            hoverCard.style.pointerEvents = 'auto';
            hoverCard.style.left = `${e.pageX + 1}px`;
            hoverCard.style.top = `${e.pageY + 1}px`;
            hoverCard.style.opacity = '1';
        });

        profile.addEventListener('mouseleave', () => {
            hoverCard.style.opacity = '0';
            hoverCard.style.pointerEvents = 'none';
        });
    });
});