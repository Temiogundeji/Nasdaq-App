import { createOvermindMock } from 'overmind';
import { config } from '../overmind';

//Get all stock data
describe('Actions', () => {
  describe('getStocks', () => {
    test('should get all stocks', async () => {
      const overmind = createOvermindMock(config, {
        api: {
          getPost() {
            return Promise.resolve()
          }
        }
      })

      await overmind.actions.getStocks()

      expect(overmind.state).toEqual({
        isLoadingStocks: false,
        stocks,
        error: null
      })
    })
    test('should handle errors', async () => {
      const overmind = createOvermindMock(config, {
        api = {
          getStocks() {
            throw new Error('test')
          }
        }
      })

      await overmind.actions.getStocks();

      expect(overmind.state.isLoadingStocks).toBe(false)
      expect(overmind.state.error.message).toBe('test')
    })
  })
})