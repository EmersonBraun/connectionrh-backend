import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

export async function sendWelcomeMailCompany (name: string, email: string, token: string, preview = false) {
  const baseUrl = Env.get('APP_WEB_URL') as string
  const link = `${baseUrl}/sign-up-activate?token=${token}`
  await Mail.sendLater((message) => {
    message
      .from(Env.get('FROM_MAIL') as string)
      .to(email)
      .subject('[Connectionrh] Bem vindo!')
      .htmlView('emails/welcome-company', {
        name,
        link,
      })
  })

  if (preview) {
    const { url } = await Mail.preview((message) => {
      message
        .to(email)
        .from(Env.get('FROM_MAIL') as string)
        .subject('[Connectionrh] Bem vindo!')
        .htmlView('emails/welcome-company', {
          name,
          link,
        })
    })

    console.log(`Preview url: ${url}`)
  }
}

export async function sendWelcomeMailCandidate (name: string, email: string, token: string, preview = false) {
  const baseUrl = Env.get('APP_WEB_URL') as string
  const link = `${baseUrl}/sign-up-activate?token=${token}`
  await Mail.sendLater((message) => {
    message
      .from(Env.get('FROM_MAIL') as string)
      .to(email)
      .subject('[Connectionrh] Bem vindo!')
      .htmlView('emails/welcome-candidate', {
        name,
        link,
      })
  })

  if (preview) {
    const { url } = await Mail.preview((message) => {
      message
        .to(email)
        .from(Env.get('FROM_MAIL') as string)
        .subject('[Connectionrh] Bem vindo!')
        .htmlView('emails/welcome-company', {
          name,
          link,
        })
    })

    console.log(`Preview url: ${url}`)
  }
}
