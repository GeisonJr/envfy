export type TMode = 'development' | 'production' | 'test'

export interface TEnv {
	key: string
	value: string
}

export interface TOptions {
	/**
	 * @description If true, the environment file will be read and the environment variables will be set
	 * @default false
	 */
	config?: boolean
	/**
	 * @description The path to the environment file
	 * @default process.cwd()
	 */
	path?: string
	/**
	 * @description If true, the environment variable is required and an error will be thrown if it is not found
	 * @default false
	 */
	strict?: boolean
}
