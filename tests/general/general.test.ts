import * as envfy from '../../src/index'

envfy.config('./tests/general')

describe('General environment not strict', () => {
	test('Value without quotes and without spaces', () => {
		expect(envfy.string('VAR_X')).toBe('')
	})
})
