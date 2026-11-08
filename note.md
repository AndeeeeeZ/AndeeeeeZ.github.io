---
published: false
---

# Preview the website locally

Run `bundle install` once when setting up the project. Run it again only if the `Gemfile` changes.

This site uses the older `github-pages` Jekyll dependencies. Use **Ruby 3.1.x** for local preview. If `ruby -v` shows Ruby 4.0, install [Ruby+Devkit 3.1.7 (x64)](https://rubyinstaller.org/downloads/archives/) in a separate folder, then reopen VS Code and check `ruby -v` again. Make sure the Ruby 3.1 `bin` folder comes before Ruby 4.0 in your `PATH`. Run `gem install bundler` if needed, then `bundle install` once under Ruby 3.1.

Each time you reopen VS Code:

1. Open a terminal in this project folder.
2. Run:

   ```powershell
   $env:SSL_CERT_FILE = 'C:\Ruby31-x64\ssl\cert.pem'
   bundle exec jekyll serve --livereload
   ```

3. Open <http://localhost:4000> in your browser.

Keep the terminal running while you work. Saved changes should refresh the page. Press `Ctrl+C` to stop the server.

The command is `jekyll serve`, not `jekyll server`.

The `SSL_CERT_FILE` line lets Ruby verify GitHub's certificate when downloading the remote theme. It applies only to this terminal session. If Ruby 3.1 is installed in another folder, use that folder's `ssl\cert.pem` instead.
