# Jellyfin

## Documentation

- [Jellyfin documentation](https://jellyfin.org/docs/) — the upstream administrator and user guide covering libraries, clients, transcoding, and plugins.

## What you get on StartOS

- A **Web UI** interface that serves the Jellyfin web client and acts as the endpoint your Jellyfin mobile, TV, and desktop apps connect to.
- Read-only access to media stored on **NextExplorer**, **FileBrowser Quantum** and/or **Nextcloud**, mounted at `/mnt/nextexplorer`, `/mnt/filebrowser` and `/mnt/nextcloud/data` (Nextcloud's user files only) inside Jellyfin. NextExplorer is the recommended one.
- Access to any **Shared Volume** you grant Jellyfin in StartOS (requires StartOS 0.4.3), mounted at `/mnt/shared/<volume-id>`. A shared volume can be a local folder, an attached drive or a network share, and you choose per volume whether Jellyfin may only read it or also write to it.

## Getting set up

Jellyfin posts a critical **Select Media Sources** task after install. You can't start the service until you either complete it or grant Jellyfin at least one shared volume.

1. Install **NextExplorer** (recommended), **FileBrowser Quantum** or **Nextcloud**, in any combination, and upload your media there.
2. Run the **Select Media Sources** task and tick the source(s) you uploaded media to. At least one must be selected.
3. Start Jellyfin and open the **Web UI** interface. Complete the upstream first-run wizard (create the admin user, set preferences).
4. In the wizard's library step, point each library at the read-only mount for the source you selected: `/mnt/nextexplorer/Files` (or another NextExplorer drive by name), `/mnt/filebrowser`, or `/mnt/nextcloud/data/<user>/files`.

## Using Jellyfin

### Web UI

The **Web UI** interface is the Jellyfin web client. After the first-run wizard it becomes your day-to-day server admin and playback surface — users, libraries, playback settings, transcoding, plugin management, and remote access all live there. Point your Jellyfin client apps at the same address.

### Actions

- **Select Media Sources** — change which of NextExplorer, FileBrowser Quantum and Nextcloud Jellyfin reads from. Changing sources updates Jellyfin's dependencies; if you remove a source, also remove or repoint any Jellyfin libraries that referenced its mount point.
- **Plugins** — toggle the bundled **Chromecast** (cast to a Chromecast from Chromium-based browsers) and **YouTube Trailers** (play trailers hosted on YouTube in an embedded player, which connects your browser to YouTube) plugins. Reload the web client for a change to take effect. All other plugins are managed inside the Jellyfin Web UI's plugin catalog.

## Limitations

- **No arbitrary media paths.** Jellyfin can only read media from NextExplorer, FileBrowser Quantum, Nextcloud and/or shared volumes you grant it — not from arbitrary host directories.
- **Service media is read-only.** Jellyfin cannot modify or delete files in `/mnt/nextexplorer`, `/mnt/filebrowser` or `/mnt/nextcloud/data`; manage your media in the source service. A shared volume is read-only unless you grant read/write. Subtitles you upload or download in Jellyfin are kept in Jellyfin's own data instead of beside the video, so StartOS turns off each library's **Save subtitles into media folders** option when Jellyfin starts. If you add a library or turn that option back on, restart Jellyfin before adding subtitles to it.
- **Shared volume paths use the volume's ID**, not its name, so renaming a volume does not break a library. An offline volume is left unmounted until Jellyfin restarts.
- **No hardware transcoding.** GPU acceleration is not available; transcoding is CPU-only.
