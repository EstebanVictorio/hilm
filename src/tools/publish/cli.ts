import {
  confirm,
  isCancel,
  cancel,
} from '@clack/prompts';
import { execute, TOOL_NAME } from './'
import { RUNTIME_JOB_CODE } from '../../types/system';

async function main() {
  const shouldContinue = await confirm({
    message: `Do you want to continue running ${TOOL_NAME}?`,
  });

  const envPath = `${process.cwd()}/.env.local`

  if (isCancel(shouldContinue)) {
    cancel(`${TOOL_NAME} cancelled.`)
    return process.exit(RUNTIME_JOB_CODE.SUCCESS);
  }

  await execute(envPath);
}

await main()