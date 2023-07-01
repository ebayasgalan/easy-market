import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.ts"]
};

export default config;