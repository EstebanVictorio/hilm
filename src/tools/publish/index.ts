import dotenv from "dotenv"
import { Effect, Layer } from 'effect'
import { SystemEnvironmentService, SystemEnvironment } from "../../services/env"
import { getNotes } from "../../services/collected-notes"
import type { SystemEnv } from "../../types/env"
import { RUNTIME_JOB_CODE } from "../../types/system"

type Success = void
type Failure = number
type Live = SystemEnvironmentService

export const TOOL_NAME = 'hilm_publish'

export const publishScript: Effect.Effect<Success, Failure, Live> = Effect.gen(function*() {
  const systemEnv = yield* SystemEnvironmentService

  const env = yield* Effect.try<SystemEnv, number>({
    try: () => systemEnv.config(),
    catch: () => RUNTIME_JOB_CODE.FAILURE
  })

  const notes = yield* getNotes(env)
  console.log(`notes:\n`)
  console.log(JSON.stringify(
    JSON.parse(notes)
  , null, 2))
})

export const execute = async (path?: string) => {
  const PublishLive = Layer.succeed(
    SystemEnvironmentService,
    new SystemEnvironment(path)
  )

  await Effect.runPromise(
    Effect.provide(publishScript, PublishLive)
  )
}

export const tool = {
  name: TOOL_NAME,
  description: "A tool for publishing the latest hilm blog posts",
  execute,
}
