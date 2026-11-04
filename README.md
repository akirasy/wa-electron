# WhatsApp Electron

A lightweight, clean desktop wrapper for WhatsApp Web built using **Node.js**, **Electron**, and **electron-builder**. Designed with session persistence, customized user-agents, and modern framing for a native desktop experience on Linux and other platforms.

## Features

* **Session Persistence:** Keeps your login session safe across restarts using isolated partitions (`persist:whatsapp-session`).
* **Native Integration:** Custom window framing, hidden default menu bars, and custom AppImage/binary build support via `electron-builder`.
* **Custom User Agent:** Configured to mimic modern desktop browsers to ensure full compatibility with WhatsApp Web standards.

## Prerequisites

Make sure you have **Node.js** installed on your system.

## Getting Started

1. Clone the repository:

```
git clone https://github.com/akirasy/whatsapp-electron.git
cd whatsapp-electron
```

2. Install dependencies:

```
npm install
```

3. Run the app locally in development mode:

```
npm start
```

## Building for Production

To build a standalone distribution or package for your system:

* **Build unpacked directory:**

```
npm run build:dir
```

* **Build Linux AppImage:**

```
npm run build:image
```

*(Generated artifacts will be placed in the `dist/` directory).*

## License

This project is open-source and available under the `MIT License`.
