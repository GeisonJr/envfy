/* Dependencies */
import { isBoolean, isNumber, isString, isUndefined } from '@geisonjr/typefy'
import * as fs from 'node:fs'
import * as path from 'node:path'

/* Project */
import { TEnv, TMode } from './types'

/**
 * @description Get the environment variable
 * @version 1.0.0
 * @since 1.0.0
 */
export function get(
	key: string,
	defaultValue?: boolean | number | string,
): string | number | boolean | undefined {
	return process.env[key] ?? defaultValue
}

/**
 * @description Set the environment variable
 * @version 1.0.0
 * @since 1.0.0
 */
export function set(key: string, value: boolean | number | string) {
	process.env[key] = value.toString()
}

/**
 * @description Load the environment variables from the .env files
 * @version 1.0.0
 * @since 1.0.0
 */
export function config(dir: string = process.cwd()) {
	const mode = process.env.NODE_ENV as TMode
	const files = [`.env`, `.env.local`]

	if (!isUndefined(mode)) files.push(`.env.${mode}`, `.env.${mode}.local`)

	for (const file of files) {
		try {
			const raw = fs.readFileSync(path.resolve(dir, file), 'utf8')
			const items = parse(raw)

			for (const item of items) {
				const { key, value } = item
				process.env[key] = value
			}
		} catch (err: any) {
			if (err.code !== 'ENOENT') throw err
		}
	}
}

/**
 * @description Parse a env structure to array of Key Value
 * @example
 * ```ts
 * parse(`
 * HOST="http://localhost:3000"
 * PORT=3000
 * DOMAIN=localhost
 * `)
 * return [
 * 	{ key: 'HOST', value: 'http://localhost:3000' },
 * 	{ key: 'PORT', value: '3000' },
 * 	{ key: 'DOMAIN', value: 'localhost' }
 * ]
 * ```
 * @version 1.0.0
 * @since 1.0.0
 */
export function parse(raw: Buffer | string): TEnv[] {
	return (
		raw
			// Convert buffer to string
			.toString()
			// Convert line breaks to same format
			.replace(/\r?\n/gm, '\n')
			// Split into lines
			.split('\n')
			// Filter out invalid lines
			.filter((line) => {
				// Remove white spaces
				const text = line.trim()

				// Ignore comments
				if (text.startsWith('#')) return false
				if (text.startsWith('//')) return false
				if (text.startsWith('--')) return false
				// Ignore lines without text
				if (!text.length) return false
				// Ignore lines without an equal sign
				if (!text.includes('=')) return false
				return true
			})
			.map((line) => {
				// Split into key and value
				const text = line.split('=', 2)

				// Remove whitespace
				const key = text[0].trim()
				// Remove whitespace
				let value = text[1].trim()

				// Remove quotes
				if (
					(value.startsWith('"') && value.endsWith('"')) ||
					(value.startsWith("'") && value.endsWith("'")) ||
					(value.startsWith('`') && value.endsWith('`'))
				)
					value = value.slice(1, -1)

				// Remove white spaces
				value = value.trim()

				return { key, value }
			})
	)
}

/**
 * @description Get the environment variable boolean
 * @version 1.0.0
 * @since 1.0.0
 */
export function boolean(key: string, defaultValue: boolean = false): boolean {
	const value = get(key, defaultValue)

	if (isBoolean(value)) return value
	else if (isString(value))
		if (['true', '1', 'yes', 'y', 'on'].includes(value)) return true
		else if (['false', '0', 'no', 'n', 'off'].includes(value)) return false

	return false
}

/**
 * @description Get the environment variable number
 * @version 1.0.0
 * @since 1.0.0
 */
export function number(key: string, defaultValue: number = 0): number {
	const value = get(key, defaultValue)

	if (isNumber(value)) return value
	else if (isString(value)) return Number(value)

	return 0
}

/**
 * @description Get the environment variable string
 * @version 1.0.0
 * @since 1.0.0
 */
export function string(key: string, defaultValue: string = ''): string {
	const value = get(key, defaultValue)

	if (isString(value)) return value

	return ''
}
