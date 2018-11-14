# Serverless CLJS

This is a template / example repo I built as a proof of
concept for some serverless ideas I had. I had a few
design principles and goals.

* Data driven architecture. Serverless solves a lot of this, and shadow-cljs solves a little more of this as well. At the end of the day, every single thing you deploy is documented and is in source control.
* Simple deploys. Serverless takes care of this too. To deploy, run `serverless deploy` after configuring your credentials.
* REPL driven, hot reloading offline dev. `serverless-offline`, shadow-cljs, and my plugin solve this problem. To get a hot reloading local server, run `serverless offline`. To get a REPL, run `serverless watch repl`, connect to the nREPL port provided, and then in another process run `node target/shadow.js`. Now, in your nREPL client, type in `(shadow/repl :repl)`. You'll now get a client.

## Things I Need To Do Before You Test This

* Upload my plugin to the serverless plugins list.
* Write more docs.
