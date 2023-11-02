self.addEventListener('push', () => {
    self.registration.sendNotification('Test Subscribe Message', {});
})