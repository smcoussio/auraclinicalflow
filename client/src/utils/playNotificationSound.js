const audio = new Audio('/sounds/notification.mp3');

export default function playNotificationSound() {
  audio.currentTime = 0;
  audio.volume = 0.4;

  audio.play().catch(() => {
    // El navegador puede bloquear el audio
    // hasta que el usuario interactúe con la página.
  });
}
