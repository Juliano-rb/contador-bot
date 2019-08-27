// by https://larsgraubner.com/, exposes the parameters of the message
const commandArgs = () => (ctx, next) => {
  if (ctx.updateType === "message" && ctx.update.message.text) {
    const text = ctx.update.message.text.toLowerCase();
    if (text.startsWith("/")) {
      const match = text.match(/^\/([^\s]+)\s?(.+)?/);
      let args = [];
      let command;
      let complement;
      if (match) {
        if (match[1]) {
          [command] = match;
        }
        if (match[2]) {
          [, complement] = match;
        }
        if (match[2]) {
          args = match[2].split(" ");
        }
      }

      ctx.state.command = {
        raw: text,
        command,
        complement,
        args
      };

      console.log(ctx.state.command);
    }
  }

  return next();
};

module.exports = commandArgs;
