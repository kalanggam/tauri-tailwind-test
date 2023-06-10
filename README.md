# Tauri + Tailwind CSS test project

This is just a test project to practice using Rust with Tauri and Tailwind CSS to create a simple to-do app, with a light amount of Javascript.

## Getting started

1. Install the `create-tauri-app` tool, then run it with Cargo to scaffold a new project.

    ```
    cargo install create-tauri-app
    cargo create-tauri-app
    ```

2. When prompted, provide a name for the project and choose the vanilla, Rust-based template.

*The next steps all follow the [installation](https://tailwindcss.com/docs/installation) steps in the Tailwind CSS docs.*

3. From the main project directory, set up Tailwind CSS. I use Node.js & npm to access the Tailwind CLI, but it is also possible to use it as a standalone executable.

    ```
    npm install -D tailwindcss
    npx tailwindcss init
    ```

4. In `tailwind.config.js`, update `content` to include the paths to your source files.

    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```

5. In the main stylesheet (in this case, the `src/styles.css` file created by Tauri), add the Tailwind directives.

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

6. Run the Tailwind CLI to build the stylesheet and watch it for changes. From the root directory, I use:

    ```
    npx tailwindcss -i ./src/styles.css -o ./src/assets/styles.css --watch
    ```

7. From here, you can begin changing the Tauri/Rust source and the HTML/CSS/JS frontend in the `src-tauri` and `src` directories, respectively. Use `cargo tauri dev` from the project root to start the app in developer mode.

## Running

Run the Tailwind CLI to build the stylesheet and watch it for changes. From the root directory, I use:

```
npx tailwindcss -i ./src/styles.css -o ./src/assets/styles.css --watch
```

Then, start the Tauri CLI with `cargo tauri dev` to launch the app.