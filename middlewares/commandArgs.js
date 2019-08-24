//by https://larsgraubner.com/, exposes the parameters of the message
const commandArgs = () => (ctx, next) => {
  if (ctx.updateType === 'message') {
    const text = ctx.update.message.text.toLowerCase()
    if (text.startsWith('/')) {
      const match = text.match(/^\/([^\s]+)\s?(.+)?/)
      let args = []
      let command
      if (match !== null) {
        if (match[1]) {
          command = match[1]
        }
        if (match[2]) {
          complement = match[2]
        }
        if (match[2]) {
          args = match[2].split(' ')
        }
      }

      ctx.state.command = {
        raw: text,
        command,
        complement,
        args
      }

      console.log(ctx.state.command)
    }
  }
  
  return next()
}

module.exports = commandArgs