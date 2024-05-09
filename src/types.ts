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
}

export interface GetOptions {
	/**
	 * @description The default value of the environment variable
	 * @default undefined
	 */
	defaultValue?: any
	/**
	 * @description If true, the environment variable is required and an error will be thrown if it is not found
	 * @default false
	 */
	required?: boolean
	/**
	 * @description Apply the trim method to the environment variable
	 * @default false
	 */
	trim?: boolean
}

export interface BooleanOptions {
	/**
	 * @description The default value of the environment variable
	 * @default undefined
	 */
	defaultValue?: boolean
	/**
	 * @description If true, the environment variable is required and an error will be thrown if it is not found
	 * @default false
	 */
	required?: boolean
	/**
	 * @description If true, an error will be thrown if the environment variable is not a boolean
	 * @default false
	 */
	throw?: boolean
	/**
	 * @description Apply the trim method to the environment variable
	 * @default true
	 */
	trim?: boolean
}

export interface NumberOptions {
	/**
	 * @description The default value of the environment variable
	 * @default undefined
	 */
	defaultValue?: number
	/**
	 * @description If true, the environment variable is required and anerror will be thrown if it is not found
	 * @default false
	 */
	required?: boolean
	/**
	 * @description The maximum value of the environment variable
	 */
	max?: number
	/**
	 * @description The minimum value of the environment variable
	 */
	min?: number
	/**
	 * @description If true, an error will be thrown if the environment variable is not a number
	 * @default false
	 */
	throw?: boolean
	/**
	 * @description Apply the trim method to the environment variable
	 * @default true
	 */
	trim?: boolean
}

export interface StringOptions extends GetOptions {
	/**
	 * @description The default value of the environment variable
	 * @default undefined
	 */
	defaultValue?: string
	/**
	 * @description If true, the environment variable is required and an error will be thrown if it is not found
	 * @default false
	 */
	required?: boolean
	/**
	 * @description Apply the trim method to the environment variable
	 * @default true
	 */
	trim?: boolean
	/**
	 * @description If true, an error will be thrown if the environment variable is not a string
	 * @default false
	 */
	throw?: boolean
}
