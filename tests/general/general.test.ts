import { createEnvs } from '../../src/index'

describe('General environment not strict', () => {
	const envs = createEnvs({
		config: true,
		strict: false,
		path: './tests/general',
	})

	test('Value without quotes and without spaces', () => {
		expect(envs.string('VAR_X')).toBe('')
	})
})
