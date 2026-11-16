import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '12.4:6',
  releaseNotes: {
    en_US:
      'Requires StartOS 0.4.3 or later. Adds support for StartOS shared volumes: grant Jellyfin a local folder, drive or network share and it appears under /mnt/shared.',
    es_ES:
      'Requiere StartOS 0.4.3 o posterior. Añade compatibilidad con los volúmenes compartidos de StartOS: concede a Jellyfin una carpeta local, una unidad o un recurso de red y aparecerá en /mnt/shared.',
    de_DE:
      'Erfordert StartOS 0.4.3 oder neuer. Unterstützt gemeinsame Volumes von StartOS: Gewähren Sie Jellyfin einen lokalen Ordner, ein Laufwerk oder eine Netzwerkfreigabe, und sie erscheint unter /mnt/shared.',
    pl_PL:
      'Wymaga StartOS 0.4.3 lub nowszego. Dodaje obsługę woluminów współdzielonych StartOS: przyznaj Jellyfin folder lokalny, dysk lub udział sieciowy, a pojawi się w /mnt/shared.',
    fr_FR:
      'Nécessite StartOS 0.4.3 ou une version ultérieure. Ajoute la prise en charge des volumes partagés de StartOS : accordez à Jellyfin un dossier local, un disque ou un partage réseau et il apparaît sous /mnt/shared.',
  },
  migrations: {},
})
