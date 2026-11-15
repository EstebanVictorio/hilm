import { Context } from 'effect'
import type { SystemEnv } from '../types/env';
import dotenv from 'dotenv'

// type Environment = 'local'| 'develop' | 'production'

export class SystemEnvironmentService extends Context.Service<SystemEnvironmentService, {
  config: (path?: string) => SystemEnv
}>()("SystemEnvService") {}

export class SystemEnvironment {
  path?: string;
  constructor(path?: string) {
    this.path = path;
  }
  config() {
    const { error, parsed: env } = dotenv.config(this.path ? { path: this.path }: undefined)
    if (env) return (env as unknown) as SystemEnv
    throw error
  }
}