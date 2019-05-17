# speedcontrol-layoutswitch

## Description

This is a [NodeCG](https://nodecg.com) bundle intended to be used on top of [Speedcontrol](http://github.com/speedcontrol/nodecg-speedcontrol).  It provides extra functionality on top for switching layouts within the NodeCG dashboard so you can have all your game layouts in a single HTML file and just switch the CSS for each one.  This allows you to have a single "game" scene within OBS and switch the game layouts in NodeCG instead.

This bundle is intended to be used in conjunction with Speedcontrol, but does not provide any actual graphics for your layouts.  You need to make these yourself in a separate bundle of your own.

## Bundle Config File

The config schema for this bundle has `extraLayouts` which is an array of custom layouts for your event beyond the basic ones included here.  See `configschema.json` for the definitions.

The extra layouts should be an array of objects with the following properties:

- `name` - Name of the layout (this shows in the dropdown), ex. "4:3 2 players"
- `code` - Text code used as the layout ID and saved as the current layout.  Best idea is to have this be the name of your CSS file minus the extension, ex. "4-3_2p".

This bundle includes basics like 4:3 and 16:9 from 1 to 4 players, as well as some Game Boy, GBA, and DS ones.  This extra list is for things such as randomizer races with a custom layout for trackers, or special segments or interviews.

## Getting Started

### 1. Install Node.js
Instructions on the Node.js site here: https://nodejs.org/en/

**NOTE:** At time of this writing, the current LTS version is 10.13 and NodeCG recommends sticking with the LTS releases for production.  It should work with the current stable version as well, which is 11.2 currently, but you'll have to test this yourself.

### 2. Install NodeCG modules
Follow the quick start guide here: https://nodecg.com/tutorial-3_quick-start.html

Do steps 1-3 to install the `bower` and `nodecg-cli` packages.

### 3. Make a working directory and install NodeCG
Create a fresh directory, and run the NodeCG setup in it:

```bash
nodecg setup
```

### 4. Install bundles
Install both the Speedcontrol bundle and this one from GitHub using the following commands:

```bash
nodecg install speedcontrol/nodecg-speedcontrol
nodecg install PowerUpWithPride/speedcontrol-layoutswitch
```

This will create a `bundles` subfolder inside your new directory that contains git repositories of these two bundles.  You can now make whatever changes and tweaks you like from that location.

### 5. Generate config files

You can generate default config files for the bundles based on their config schemas:

```bash
nodecg defaultconfig nodecg-speedcontrol
nodecg defaultconfig speedcontrol-layoutswitch
```

This will create a new subdirectory called `cfg` for the config files.

You can check out the JSON config files from the [config files repository](https://github.com/PowerUpWithPride/puwp-config-files/tree/master/layouts) for NodeCG and Speedcontrol themselves to see exactly what settings we're using.  You should copy the Speedcontrol one at least, because that includes the Twitch integration settings.

### 6. Run the server locally to test
In the directory where you ran setup initially, run the following:

```bash
nodecg start
```

The server should run on `localhost:9090` by default.  You can open this location in your web browser and start experimenting.

### 7. Running in production

To run NodeCG in production, [pm2](https://pm2.io) is recommended.
