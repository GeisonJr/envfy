/* Dependencies */
import { isArray, isString, isUndefined } from '@geisonjr/typefy'
import { config } from './config'
import { TOptions } from './types'

export class Envs {
	private _options: TOptions

	constructor(options?: TOptions) {
		this._options = {
			strict: false,
			config: false,
			path: process.cwd(),
			...options,
		}

		if (this._options.config) config(this._options?.path)
	}

	/**
	 * @description Get the environment variable
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	public get(key: string) {
		return process.env[key]
	}

	/**
	 * @description Get the environment variable
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	public set(key: string, value: string, standard?: string | string[]) {
		if (!isUndefined(standard)) {
			if (isString(standard) && standard !== value) this.invalid(key, value)
			else if (isArray(standard) && !standard.includes(value))
				this.invalid(key, value)
		}

		process.env[key] = value
	}

	/**
	 * @description Get the environment variable boolean
	 * @throws Error
	 * @example
	 * ```ts
	 * this.boolean('example')
	 * // true
	 * ```
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	public boolean(key: string, defaultValue?: boolean): boolean {
		const value = this.get(key)?.trim()?.toLowerCase()

		if (!isUndefined(value)) {
			if (['true', '1', 'yes', 'y', 'on'].includes(value)) return true
			else if (['false', '0', 'no', 'n', 'off'].includes(value)) return false

			if (!isUndefined(defaultValue)) return defaultValue
			return this.invalid(key, false)
		} else if (!isUndefined(defaultValue)) return defaultValue

		return this.missing(key, false)
	}

	/**
	 * @description Get the environment variable string
	 * @throws Error
	 * @example
	 * ```ts
	 * this.string('example')
	 * // "example value"
	 * ```
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	public string(key: string, defaultValue?: string): string {
		const value = this.get(key)

		if (!isUndefined(value)) return value
		else if (!isUndefined(defaultValue)) return defaultValue

		return this.missing(key, '')
	}

	/**
	 * @description Get the environment variable number
	 * @throws Error
	 * @example
	 * ```ts
	 * this.number('example')
	 * // 1
	 * ```
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	public number(key: string, defaultValue?: number): number {
		const value = this.get(key)?.trim()

		if (!isUndefined(value)) {
			const num = Number(value)
			if (!Number.isNaN(num)) return num

			if (!isUndefined(defaultValue)) return defaultValue
			return this.invalid(key, 0)
		} else if (!isUndefined(defaultValue)) return defaultValue

		return this.missing(key, 0)
	}

	/**
	 * @description Get the environment variable enum
	 * @throws Error
	 * @example
	 * ```ts
	 * this.array('example')
	 * // ["example", "value"]
	 * ```
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	public enum<T>(key: string, defaultValue: T): T {
		const value = this.get(key) as T

		if (!isUndefined(value)) return value
		else if (!isUndefined(defaultValue)) return defaultValue

		return this.missing(key, null as T)
	}

	/**
	 * @description Invalid environment variable
	 * @throws Error
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private invalid<T>(key: string, defaultValue: T): T {
		if (this._options.strict) throw new Error(`Invalid environment ${key}`)

		return defaultValue
	}

	/**
	 * @description Missing environment variable
	 * @throws Error
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private missing<T>(key: string, defaultValue: T): T {
		if (this._options.strict) throw new Error(`Missing environment ${key}`)

		return defaultValue
	}
}

/**
 * @description Create a new environment
 * @version 1.0.0
 * @since 1.0.0
 */
export function createEnvs(options?: TOptions): Envs {
	return new Envs(options)
}
