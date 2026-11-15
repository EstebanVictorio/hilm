import { Effect } from 'effect'
import type { SystemEnv } from '../types/env';
import evlog from 'evlog'
import { RUNTIME_JOB_CODE } from '../types/system';

export function getNotes(env: SystemEnv) {
  const fetchNotes = Effect.tryPromise({
    try: () =>
      fetch(`${env.COLLECTED_NOTES_API}/sites/${env.COLLECTED_NOTES_COLLECTION}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${env.COLLECTED_NOTES_USER} ${env.COLLECTED_NOTES_API_KEY}`
        }
      })
      .then(response => response.text()),
    catch: (error) => {
      evlog.error('getNotes(env: SystemEnv)', (error as Error).message)
      return RUNTIME_JOB_CODE.FAILURE
    },
  })

  return fetchNotes
};