/* Dependencies */
import * as fs from 'node:fs'
import * as path from 'node:path'

/* Project */
import { TEnv, TMode } from './types'

/**
 * @description Load the environment variables from the .env file
 * @version 1.0.0
 * @since 1.0.0
 */
export function config(dir: string = process.cwd()) {
	const mode = process.env.NODE_ENV as TMode
	for (const file of [`.env.${mode}.local`, `.env.${mode}`, '.env']) {
		try {
			// const stats = fs.statSync(file)

			// Make sure to only attempt to read files
			// if (!stats.isFile()) continue

			console.log('Loading environment from', path.resolve(dir, file))

			const raw = fs.readFileSync(path.resolve(dir, file), 'utf8')
			parse(raw).forEach((env) => {
				const { key, value } = env
				process.env[key] = value
			})
		} catch (err: any) {
			if (err.code !== 'ENOENT') throw err
		}
	}
}

/**
 * @description Create a new environment
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
				// Remove whitespace
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

				return { key, value }
			})
	)
}
