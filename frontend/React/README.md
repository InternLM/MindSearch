# Notice
- If you leave the page (Make the page invisible) and come back again, it will cause sse to reconnect.
- the project requires Node.js version >= 18.0.0.

# Prepare your dev-environment for frontend
[Node.js](https://nodejs.org/en)® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

# Node.js Installation Guide (Windows, Linux, macOS)
## Windows Installation
- Step 1: Download Node.js

  1. Open your web browser and visit the [Node.js official website](https://nodejs.org/en).

  2. Navigate to the "Downloads" section.

  3. Select the desired version (LTS recommended for long-term stability). As of August 2024, the latest LTS version might be v20.x.x.

  4. Click on the "Windows Installer (.msi)" link to download the installation package.

- Step 2: Install Node.js

  1. Double-click the downloaded .msi file to start the installation wizard.

  2. Click "Next" to proceed.

  3. Read and accept the license agreement by checking the "I accept the terms in the License Agreement" box.

  4. Click "Next" again and select the installation directory. It's recommended to change the default location to avoid installing in the C drive.

  5. Continue clicking "Next" to use the default settings until you reach the "Install" button.

  6. Click "Install" to start the installation process.

  7. Wait for the installation to complete and click "Finish" to exit the installation wizard.

- Step 3: Verify Installation
  1. Open the Command Prompt (cmd) by pressing `Win + R`, typing `cmd`, and pressing Enter.
  2. Type `node -v` and press Enter. You should see the installed Node.js version displayed.
  3. Type `npm -v`  and press Enter to verify the installed npm version. npm is the package manager that comes bundled with Node.js.

- Step 4: Configure npm Global Path (Optional)
  If you want to change the default global installation path for npm, follow these steps:

1. Open the Command Prompt (cmd) as an administrator.

2. Navigate to your Node.js installation directory (e.g., C:\Program Files\nodejs).

3. Create two new folders named node_global and node_cache.

4. Run the following commands to set the new paths:

   ```bash
   npm config set prefix "C:\Program Files\nodejs\node_global"  
   npm config set cache "C:\Program Files\nodejs\node_cache"
   ```

5. Open the Environment Variables settings in the System Properties.
6. Add `C:\Program Files\nodejs\node_global` to the `PATH` variable under User Variables.
7. Optionally, create a new system variable named `NODE_PATH` and set its value to ` C:\Program Files\nodejs\node_global\node_modules`.

## Linux Installation
- Step 1: Update Your System
  Before installing Node.js, ensure your Linux system is up-to-date:

  ```bash
  sudo apt-get update  
  sudo apt-get upgrade
  ```

- Step 2: Install Dependencies
  Node.js requires certain dependencies to function properly:

```bash
sudo apt-get install build-essential libssl-dev
```

- Step 3: Download and Install Node.js
  You can download the Node.js source code or use a package manager like `curl` or `wget` to download a pre-built binary. For simplicity, this guide assumes you're using a package manager.

1. Navigate to the Node.js download page for package managers.
   Follow the instructions for your Linux distribution. For example, on Ubuntu, you can use:

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -  
   sudo apt-get install -y nodejs
   ```

   Replace 20.x with the desired version number if you don't want the latest version.

- Step 4: Verify Installation
  1. Open a terminal.
  2. Type `node -v` and press Enter to check the Node.js version.
  3. Type `npm -v` and press Enter to verify the npm version.


## Installing Node.js on macOS

Installing Node.js on macOS is a straightforward process that can be accomplished using the official installer from the Node.js website or through package managers like Homebrew. This guide will cover both methods.

### Method 1: Using the Official Installer
- Visit the Node.js Website
  - Open your web browser and navigate to https://nodejs.org/.
- Download the Installer
  - Scroll down to the "Downloads" section.
  - Click on the "macOS Installer" button to download the .pkg file. Ensure you download the latest version, which as of August 2024, might be v20.x.x or higher.
- Install Node.js
  - Once the download is complete, locate the .pkg file in your Downloads folder.
  - Double-click the file to start the installation process.
  - Follow the on-screen instructions. Typically, you'll need to agree to the license agreement, select an installation location (the default is usually fine), and click "Continue" or "Install" until the installation is complete.
- Verify the Installation
  - Open the Terminal application by going to "Finder" > "Applications" > "Utilities" > "Terminal" or using Spotlight Search (press `Cmd + Space` and type "Terminal").
  - Type `node -v` and press Enter. This command should display the installed version of Node.js.
  - Type `npm -v` and press Enter to verify that npm, the Node.js package manager, is also installed.

### Method 2: Using Homebrew
If you prefer to use a package manager, Homebrew is a popular choice for macOS.

- Install Homebrew (if not already installed)

  - Open the Terminal.

  - Copy and paste the following command into the Terminal and press Enter:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

  - Follow the on-screen instructions to complete the Homebrew installation.
      
- Install Node.js with Homebrew
  - Once Homebrew is installed, update your package list by running brew update in the Terminal.
  - To install Node.js, run the following command in the Terminal:
  ```bash
      brew install node
  ```
  - Homebrew will download and install the latest version of Node.js and npm.
- Verify the Installation
  - As with the official installer method, you can verify the installation by typing node -v and npm -v in the Terminal and pressing Enter.

### Additional Configuration (Optional)
- Configure npm's Global Installation Path (if desired):
  - You may want to change the default location where globally installed npm packages are stored. Follow the steps outlined in the Node.js documentation or search for guides online to configure this.
- Switch to a Different Node.js Version (if needed):
  - If you need to switch between multiple Node.js versions, consider using a version manager like nvm (Node Version Manager). Follow the instructions on the nvm GitHub page to install and use it.


By following these steps, you should be able to successfully install Node.js on your system. Remember to keep your Node.js and npm versions up-to-date to take advantage of the latest features and security updates.

If your env has been prepared, you can 

# Installation and Setup Instructions

## Installation
```
  npm install
```

## Start Server
```
  npm start
```

## Visit Server
```
  http://localhost:8080
```

pay attention to the real port in your terminal.maybe it won`t be 8080.

# Config
## How to modify the request URL

- Open the file `vite.config.ts`, modify the target like:

  ```
    server: {
      port: 8080,
      proxy: {
        "/solve": {
          target: "{HOST}:{PORT}",
          changeOrigin: true,
        }
      }
    }
  ```