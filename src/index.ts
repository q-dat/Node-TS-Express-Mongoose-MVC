import app from './app'

const PORT = process.env.PORT || 6001
console.log(`
██████╗ ██╗███████╗██╗   ██╗     ██████╗ ██╗   ██╗ ██████╗  ██████╗    ██████╗  █████╗ ████████╗
██╔══██╗██║██╔════╝██║   ██║    ██╔═══██╗██║   ██║██╔═══██╗██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝
██║  ██║██║█████╗  ██║   ██║    ██║   ██║██║   ██║██║   ██║██║         ██║  ██║███████║   ██║   
██║  ██║██║██╔══╝  ██║   ██║    ██║▄▄ ██║██║   ██║██║   ██║██║         ██║  ██║██╔══██║   ██║   
██████╔╝██║███████╗╚██████╔╝    ╚██████╔╝╚██████╔╝╚██████╔╝╚██████╗    ██████╔╝██║  ██║   ██║   
╚═════╝ ╚═╝╚══════╝ ╚═════╝      ╚══▀▀═╝  ╚═════╝  ╚═════╝  ╚═════╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝  `)
app.listen(PORT, () =>
  console.log(`
http://localhost:${PORT}`)
)