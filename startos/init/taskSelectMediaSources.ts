import { mediaSources } from '../actions/mediaSources'
import { store } from '../fileModels/store.json'
import { sdk } from '../sdk'
import { i18n } from '../i18n'

export const taskSelectMediaSources = sdk.setupOnInit(async (effects) => {
  const hasSource = !!(await store.read((s) => s.mediaSources).const(effects))
    ?.length
  const hasShared = !!(await sdk.getSharedVolumes(effects).const())?.length
  if (!hasSource && !hasShared) {
    await sdk.action.createOwnTask(effects, mediaSources, 'critical', {
      reason: i18n('Select where Jellyfin media are stored'),
    })
  } else {
    // Granting a shared volume or selecting a source satisfies the task; this handler re-runs on
    // either change, and a critical task would otherwise keep blocking startup.
    await sdk.action.clearTask(effects, 'jellyfin:media-sources')
  }
})
