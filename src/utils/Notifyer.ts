
interface INotify {
  title: string;
  body: string;
}

const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission()
    if (permission !== "granted") {
      throw new Error('Permissão negada')
    }
  },
  notify({ title, body }: INotify) {
    new Notification(title, {
      body
    })
  }
}

export { Notifyer }